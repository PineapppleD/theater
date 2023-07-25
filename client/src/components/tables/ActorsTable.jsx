import DynamicTable from "./table/Table";

function ActorsTable() {

    const columns = ['Actor ID', 'first name', 'last name', 'surname', 'gender', 'birth date', 'woring since', 'voice', 'height', 'busy on tour', 'achievement ID']

    return ( 
        <DynamicTable columns={columns} tableName={'Actors'} path={'actors'}/>
     );
}

export default ActorsTable;