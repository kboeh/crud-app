const express = require('express');
const app = express();
const {v4: uuid} = require('uuid');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'yo yo yo!'
    },
    {
        id: uuid(),
        username: 'Melly',
        comment: 'si si si!'
    },
    {
        id: uuid(),
        username: 'Jojo',
        comment: 'que lo que es!?'
    }
]

//display all data
app.get('/comments', (req, res) => {
res.json({comments})
// console.log(req)
})

//post new comments and redirect back to home page
app.post('/comments', (req, res) => {
     const {username, comment} = req.body;
    comments.push({ username, comment, id: uuid() })
    console.log(req.body)
    res.redirect('/'); 
})

//display id and comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params; 
    //find the correct id
    const comment = comments.find(c => c.id === id)
    res.json({comment})
    // console.log(comment) 
})

// edit comment on the server
app.patch('/comments/:id', (req, res) => {
    console.log(req.body)
    const { id } = req.params; 
    //get updates from body
    const newCommentText = req.body.comment;
    //find the target comment
    const foundComment = comments.find(c => c.id === parseInt(id))
    //then update the comment
    foundComment.comment = newCommentText;
})

app.delete('/comments/:id', (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    //find the target comment
    comments = comments.filter(c => c.id !== parseInt(id));
})

app.listen(5000, () => {console.log('server started on port 5000') })