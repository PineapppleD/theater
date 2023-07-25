import { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from '../../EmployeeList/EmployeeList';

function Authors() {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/authors')
        .then((res) => res.data)
        .then(data => {
            setAuthors(data.response)
        })
    }, [])

    const names = []

    authors.forEach(author => {
        names.push(author[1] + ' ' + author[2])
    });

    return ( 
    <>
        <EmployeeList names={names}/> 
    </> 
    );
}

export default Authors;