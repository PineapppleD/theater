import DynamicTable from "./table/Table";

function AuthorsTable() {

    const columns = ['ID', 'first name', 'last name', 'surname']

    return ( 
        <DynamicTable columns={columns} tableName={'Authors'} path={'authors'}/>
     );
}

export default AuthorsTable;