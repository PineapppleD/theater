import axios from "axios";
import { useState, useEffect } from 'react'

import EmployeeList from "../../EmployeeList/EmployeeList";


function Conductors() {

    const [conductors, setConductors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/conductors')
        .then(res => res.data)
        .then(data => {
            setConductors(data.response)
        })
    }, [])

    const names = []

    conductors.forEach(element => {
        names.push(element[1] + ' ' + element[2])
    });


    return ( 
        <EmployeeList names={names}/>
     );
}

export default Conductors;