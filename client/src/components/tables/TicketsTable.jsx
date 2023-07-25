import DynamicTable from "./table/Table";

function TicketsTable() {

    const columns = ['ID', 'price', 'quantity']

    return ( 
        <>
        <button className="btn btn-primary">Back</button>
        <DynamicTable columns={columns} tableName={'Tickets'} path={'tickets'}/>
        </>
     );
}

export default TicketsTable;