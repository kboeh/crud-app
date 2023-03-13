import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

function ShowPage() {
  const {id} = useParams();
  const [comment, setComment] = useState(['']);
  const navigate = useNavigate();

  useEffect (() => {
    fetch(`/comments/${id}`).then(
      response => response.json()
    ).then (
      data => {
        setComment(data.comment.comment)
      }
    )
  }, [id, comment])

  let deleteComment = () => {
    // sending PATCH request with fetch API in javascript
    fetch(`/comments/${id}`, {
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      },
      method: "DELETE",	
    
      // Fields that to be updated are passed
      body: JSON.stringify({
      comment: comment,
      })
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data)
    })
    
    navigate('/');
      
  };

  return (
    <div>
      <h1>Comments: {id}</h1>
      <h2>{comment}</h2>
      <a href='/'>Back to Data</a>
      <form>
          <button onClick={deleteComment}>delete</button>
        </form>
    </div>
  );
}
  
export default ShowPage;