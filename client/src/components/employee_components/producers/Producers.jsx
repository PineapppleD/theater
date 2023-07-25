import axios from 'axios';
import EmployeeList from "../../EmployeeList/EmployeeList";
import { useState, useEffect } from 'react';



function Producers() {

    const [producers, setProducers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/producers')
        .then(res => res.data)
        .then(data => {
            setProducers(data.response)
        })
    }, [])

    const names = []

    producers.forEach(element => {
        names.push(element[1] + ' ' + element[2])
    });

    return ( 
        <EmployeeList names={names}/>
     );
}

export default Producers;