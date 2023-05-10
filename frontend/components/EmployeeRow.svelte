<script lang="ts">
    import {Row, Cell} from "@smui/data-table";
    import Button from "@smui/button"
    import TextField from "@smui/textfield";
    import { createEventDispatcher } from 'svelte';
    

    interface Employee {
        id: number,
        firstName: string,
        lastName: string,
        salary: number
    } 

    export let employee:Employee;

    const dispatch = createEventDispatcher();

    let newEmployee = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        salary: employee.salary
    }

    let url:string = "http://localhost:5000/api/employees/" + employee.id;
    let isEditing:boolean = false;

    
    async function deleteEmployee() {
        try {
            const response = await fetch(url, {
                method: "DELETE"
            });
            if (response.ok) {
                dispatch('message', {});
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    async function updateEmployee() {
        try {
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            });
            if (response.ok) {
                dispatch('message', {});
            }
        } catch (error) {
            console.log(error);
        }
        isEditing = false;
    }

    async function cancelEdit() {
        newEmployee = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            salary: employee.salary
        }
        isEditing = false;
    }

</script>

<Row>
    {#if isEditing}
        <Cell>
            <TextField bind:value={newEmployee.firstName} label="First name"/>
        </Cell>
        <Cell>
            <TextField bind:value={newEmployee.lastName} label="Last name"/>
        </Cell>
        <Cell>
            <TextField bind:value={newEmployee.salary} label="salary" prefix="$" type="number"/>
        </Cell>
        <Cell>
            <Button on:click={() => {updateEmployee()}}> Confirm </Button>
        </Cell>
        <Cell>
            <Button color="secondary" on:click={() => {cancelEdit()}}> Cancel </Button>
        </Cell>
    {:else}
        <Cell>
            {employee.firstName}
        </Cell>
        <Cell>
            {employee.lastName}
        </Cell>
        <Cell>
            ${employee.salary.toFixed(2)}
        </Cell>
        <Cell>
            <Button on:click={() => {isEditing = !isEditing}}>Edit</Button>
        </Cell>
        <Cell>
            <Button color="secondary" on:click={() => {deleteEmployee()}}>Delete</Button>
        </Cell>
    {/if}
</Row>
