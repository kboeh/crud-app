function CommentForm() {

  return (
    <div>
       <form action='/comments' method='post'>
          <label for='username'>Enter Username</label>
          <input type='text' placeholder='username' name='username'>
          </input>
          <br />
          <label for='comment'>Comment Text</label>
          <br />
          <textarea id='comment' cols='30' rows='5' name='comment'></textarea>
          <br />
          <button>submit</button>
        </form>
        <a href='/'>Back to Data</a>
    </div>
  );
}

export default CommentForm;