import DynamicTable from "./table/Table";

function OrchsetrasTable() {

    const columns = ['Orchestra ID', 'Name', 'Conductor ID', 'Performance ID']

    return ( 
        <DynamicTable columns={columns} tableName={'Orchestras'} path={'orchestras'}/>
     );
}

export default OrchsetrasTable;