import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

function EditPage() {
  const {id} = useParams();
  const [initial, setInitial] = useState([''])
  const [edit, setEdit] = useState([''])
  const navigate = useNavigate();

  useEffect (() => {
    fetch(`/comments/${id}`).then(
      response => response.json()
    ).then (
      data => {
      setInitial(data.comment.comment)
      }
    )
  }, [id, initial])
  console.log(edit)
  
  let textChange = () => {
    // sending PATCH request with fetch API
    fetch(`/comments/${id}`, {
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      },
      method: "PATCH",	
    
      // Fields that to be updated are passed
      body: JSON.stringify({
      comment: edit,
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
      <h1>Edit</h1>
      <form>
          <label htmlFor='comment'>Comment Text</label>
          <br />
          <textarea onChange={(e) => {setEdit(e.target.value)}} id='comment' cols='30' rows='5' name='comment' defaultValue={initial} />
          <button onClick={textChange}>save</button>
        </form>
        <br />
        <a href='/'>Back to Data</a>
    </div>
  );
}
  
export default EditPage;