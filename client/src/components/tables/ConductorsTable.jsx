import DynamicTable from "./table/Table";

function ConductorsTable() {

    const columns = ['ID', 'first name', 'last name', 'surname', 'gender', 'birth date', 'working since']
    return ( 
        <DynamicTable columns={columns} tableName={'Conductors'} path={'conductors'}/>
     );
}

export default ConductorsTable;