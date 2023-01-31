import { useEffect, useState } from "react";
import "./App.css";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import React from 'react'; 
import { Button} from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);
  const handleClick = (ID) => {
    console.log(ID);

  
};

//peticionar con axios para retornar el cargo por ID 
useEffect(() => {
    axios
        .get('https://csoct9fwak.execute-api.us-east-1.amazonaws.com/Stage/api/v1/other_charges/{id}')
        .then((response) => {
            console.log(response);
            setData(response.data.kamData);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);


  // Fetchapi
  const fetchData = () => {
    fetch(`https://cy80u1bnd1.execute-api.us-east-1.amazonaws.com/Stage/api/v1/other_charges`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Table stripped bordered hover variant="dark" size="sm">
      <thead>
          <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Mode</th>
          <th>application_mode</th>
          </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index}>
            <td>{data.ID}</td>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.mode}</td>
            <td>{data.application_mode}</td>
            <td><Button color="#71BD44" onClick={() => handleClick(data.ID)}>
                                    Detalle
            </Button></td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>

    
  );
}



export default App;
