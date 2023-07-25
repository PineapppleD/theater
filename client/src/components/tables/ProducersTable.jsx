import DynamicTable from "./table/Table";

function ProducersTable() {

    const columns = ['ID', 'first name', 'last name', 'gender', 'birth date', 'working since']
    return ( 
        <DynamicTable columns={columns} tableName={'Producers'} path={'producers'}/>
     );
}

export default ProducersTable;