const express = require('express');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'yo yo yo!'
    },
    {
        id: 2,
        username: 'Melly',
        comment: 'si si si!'
    },
    {
        id: 3,
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
    comments.push({username, comment})
    // console.log(req.body)
    res.redirect('/'); 
})

//display id and comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params; 
    //find the correct id. Will return a string so we use parseInt
    const comment = comments.find(c => c.id === parseInt(id))
    res.json({comment})
    // console.log(comment) 
})

// app.get('/comments/:id/edit', (req, res) => {
//     const { id } = req.params; 
//     //find the correct id. Will return a string so we use parseInt
//     const comment = comments.find(c => c.id === parseInt(id))
//     res.json({comment})
//     // console.log(comment) 
// })

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
    res.redirect('/')
})

app.listen(5000, () => {console.log('server started on port 5000') })