import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1 className="text-center text-primary mb-10">Admin</h1>
      <h3 className="text-center text-info">Tables in theater database</h3>
      <ul className="list-group">
        <li className="list-group-item"><Link to='/actors_table'>Actors</Link></li>
        <li className="list-group-item"><Link to='/authors_table'>Authors</Link></li>
        <li className="list-group-item"><Link to='/performances_table'>Performances</Link></li>
        <li className="list-group-item"><Link to='/conductors_table'>Conductors</Link></li>
        <li className="list-group-item"><Link to='/producers_table'>Products</Link></li>
        <li className="list-group-item"><Link to='/tickets_table'>Tickets</Link></li>
        <li className="list-group-item"><Link to='/orchestras_table'>Orchestras</Link></li>
      </ul>
      <Link to='/' class="btn btn-primary">Back</Link>
    </div>
  );
}

export default Admin;
