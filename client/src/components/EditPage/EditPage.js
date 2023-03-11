import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
// import axios from 'axios';

function EditPage() {
  const {id} = useParams();
  const [initial, setInitial] = useState([''])
  const [edit, setEdit] = useState([''])

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
    // sending PATCH request with fetch API in javascript
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
    
      // console.log(response);
      return response.json();
      })
      .then(function (data) {
      console.log(data);
      window.location.href = {id};
      });
      
  };

  //   const userToPatch = {
  //     comment: 'foo',
  //   };

  // const textChange = async () => {
  //   const response = await axios
  //       .patch(`/comments/${id}`, userToPatch)
  //       .catch((error) => console.log('Error: ', error));
  //       console.log(response)
  //   if (response && response.data) {
  //       console.log(response);
  //       console.log(response.data);
  //   }
  // };

  
  // const textChange = () => {
  //   let data = {edit}
  //   console.log(data);
  //   axios
  //   .patch(`/comments/${id}`, data)
  //   .then(response => {
  //     console.log(response)
  //   })
  // }
  
  // console.log(edit)

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