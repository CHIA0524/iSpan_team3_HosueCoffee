import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';





function StoreMapTest(){
  const [datas, setDatas ] = useState([]);
  const fetchData = async()=>{
  const response = await fetch(`${process.env.REACT_APP_API_URL}/`);
  const results = [];

  results = [
    {
      "name": "長榮"
    },
    {
      "name": "長榮@"
    },
    {
      "name": "長榮@33"
    }
  ];

    setDatas(results);
  }
  useEffect(()=>{
    fetchData();
  },[])
    console.log(results);
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
    const {name} = store;
      return(
          <tr key={i}>
            <td>{name}</td>
          </tr>
      )
  })}   
  </tbody>
</Table></>
    )

export default StoreMapTest;