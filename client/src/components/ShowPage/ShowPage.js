import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function ShowPage() {
  const {id} = useParams();
  const [backendId, setBackendId] = useState([''])

  useEffect (() => {
    fetch(`/comments/${id}`).then(
      response => response.json()
    ).then (
      data => {
      setBackendId(data.comment.comment)
      }
    )
  }, [id, backendId])

  console.log(typeof backendId)

  return (
    <div>
      <h1>Comments: {id}</h1>
      <div>{backendId}</div>
      <a href='/'>Back to Data</a>
    </div>
  );
}
  
export default ShowPage;