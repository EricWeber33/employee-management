<script lang="ts">
    import { onMount } from "svelte";
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
    import CircularProgress from "@smui/circular-progress";
    import Button from "@smui/button";
    import TextField from "@smui/textfield";
    import EmployeeRow from "../../components/EmployeeRow.svelte";

    $: employees = [];

    let isLoaded = false;

    let newEmployee = {
        firstName: '',
        lastName: '',
        salary: null
    }

    const baseUrl:string = "http://localhost:5000/api/employees"

    async function getEmployees() {
        isLoaded = false;
        const response = await fetch(baseUrl);
        const jsonData = await response.json();
        employees = jsonData.data;
        isLoaded = true;
    }

    async function addEmployee() {
        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            });
            await response.json().then(() => {getEmployees()});
        } catch (error) {
            console.log(error);
        }
        newEmployee = {
            firstName: '',
            lastName: '',
            salary: null
        };
    }

    onMount(getEmployees);
</script>


<div class='main-content'>
    {#if isLoaded}
    <DataTable class='employee-table'>
        <Head>
            <Row>
                <Cell>
                    First name
                </Cell>
                <Cell>
                    Last Name
                </Cell>
                <Cell>
                    Salary
                </Cell>
            </Row>
        </Head>
        <Body>
            {#each employees as employee}
                <EmployeeRow on:message={getEmployees} employee={employee}/>
            {/each}
            <Row>
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
                    <Button  variant="raised" on:click={() => {addEmployee();}}>Add</Button>
                </Cell>
            </Row>
        </Body>
    </DataTable>
    {:else}
        <CircularProgress style="height: 128px; width: 128px;" indeterminate />
    {/if}
</div>


<style>
    .main-content {
        display: flex;
        margin: auto;
    }
</style>