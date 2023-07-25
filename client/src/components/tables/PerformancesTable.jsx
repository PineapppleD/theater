import DynamicTable from "./table/Table";

function PerformancesTable() {

    const columns = ['Performance ID', 'name', 'genre', 'orchestra ID', 'tour', 'mark deletion', 'author ID', 'Producer ID']

    return ( 
        <DynamicTable columns={columns} tableName={'Performances'} path={'performances'}/>
     );
}

export default PerformancesTable;