import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeList from "../../EmployeeList/EmployeeList";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/actors")
      .then((res) => res.data)
      .then((data) => {
        setActors(data.response)
      });
  }, []);

  const names = []

  actors.forEach(actor => {
    names.push(actor[1] + ' ' + actor[2])
  });

  return (
    <>
      <EmployeeList names={names}/>
    </>
  );
}

export default Actors;
