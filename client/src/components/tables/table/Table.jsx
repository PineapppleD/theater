import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Sort from "../sort/Sort";
import { Link } from "react-router-dom";

const DynamicTable = ({ columns, tableName, path }) => {
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [inputdata, setInputData] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  function handleSortByID() {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[0] - b[0];
      } else {
        return b[0] - a[0];
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  function handleSortByName() {
    const sortedData = [...data].sort((a, b) => {
      const nameA = a[1].toUpperCase();
      const nameB = b[1].toUpperCase();
      if (nameA < nameB) {
        return sortOrder === "asc" ? -1 : 1;
      } else if (nameA > nameB) {
        return sortOrder === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  const inputRef = useRef(null);

  const search = (ID) => {
    console.log(data);
    const found = data.filter((element) => element[0] === ID);
    console.log(found);
    if (found !== []) {
      alert(found);
    } else {
      alert(`there is no such row with ID ${ID}`);
    }
    return found;
  };

  function handleClick() {
    const inputValue = inputRef.current.value;
    if (typeof parseInt(inputValue) === "number") {
      console.log(inputValue);
      return parseInt(inputValue);
    } else {
      alert("Please enter correct value!");
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${path}`)
      .then((res) => {
        setData(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sorted]);

  const renderTableHeader = () => {
    if (data.length > 0) {
      return columns.map((col, index) => {
        return <th key={index}>{col}</th>;
      });
    }
    return null;
  };

  const handleDelete = (row) => {
    let subpath = path.substring(0, path.length - 1);
    const url = `http://localhost:5000/delete${subpath}/${row[0]}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(
          "You can not delete this table, because its ID is connected with Performance table"
        );
      });
  };

  const renderTableData = () => {
    if (data.length > 0) {
      return data.map((row, index) => {
        return (
          <tr key={index}>
            {Object.keys(row).map((key) => (
              <td key={key}>{row[key] !== null ? row[key] : "none"}</td>
            ))}
            <td>
              <button className="btn btn-primary">Change</button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(row)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
    return null;
  };

  return (
    <>
      <Sort handleSortByID={handleSortByID} handleSortByName={handleSortByName}/>
      <h1 className="text-primary mb-5 text-center">{tableName}</h1>
      <Link to="/admin"><button className="btn btn-primary">Back</button></Link>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          ref={inputRef}
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => search(handleClick())}
          >
            Search
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>{renderTableHeader()}</tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </>
  );
};
export default DynamicTable;
