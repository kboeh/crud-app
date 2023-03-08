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
  }, {})
  
  console.log(backendData)

  return (
    <div>
      {(typeof backendData.comments === 'undefined') ? (
      <p>Loading...</p>
      ) : (
        backendData.comments.map((comment, i) => (
        <p key={i}>"{comment.comment}" <br/> ---{comment.username} <br/></p>
        ))
      )}
      <a href='/form'>New Comment</a>
    </div>
  );
}

export default DataPage;