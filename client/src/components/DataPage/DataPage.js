// import './App.css';
import React, {useEffect, useState} from 'react';

function DataPage() {

  const [backendData, setBackendData] = useState([{}])

  useEffect (() => {
    fetch("/comments").then(
      response => response.json()
    ).then (
      data => {
      setBackendData(data)
      }
    )
  }, [])
  
  console.log(backendData)

  return (
    <div>
      <h1>Comments</h1>
      <ul>{(typeof backendData.comments === 'undefined') ? (
      <p>Loading...</p>
      ) : (
        backendData.comments.map((c) => (
          <li key={c.id}>"{c.comment}" ---{c.username} <a href={c.id}>---details</a><a href={c.id + '/edit'}>---Edit</a></li>
        // <p key={i}>"{comment.comment}" <br/> ---{comment.username}<br/></p>
        ))
      )}</ul>
      <a href='/form'>New Comment</a>
    </div>
  );
}
export default DataPage;