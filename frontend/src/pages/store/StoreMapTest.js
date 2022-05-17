import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function StoreMapTest(){
  const [datas, setDatas ] = useState([])
  const fetchData = async()=>{
    const response = await fetch("http://localhost:3000/store/map");
    const results = await response.json();
    setDatas(results);
  }
  useEffect(()=>{
    fetchData();
  },[])

    return(
      <>
    <h3>Categories Page</h3> 
  
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>CateogryID</th>
      <th>CategoryName</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {datas.length > 0 && datas.map((store,i)=>{
    const {id, store_name,city} = store;
      return(
          <tr key={i}>
            <td>{id}</td>
            <td>{store_name}</td>
            <td>{city}</td>
          </tr>
      )
  })}   
  </tbody>
</Table></>
    )
}
export default StoreMapTest;