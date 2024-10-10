import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Todolist = () => {

    const [todo, setTodo] = useState('')
    const [name, setName] = useState('')
    const [db, setDb] = useState([]);
    function dataPost() {
        axios.post("http://localhost:3000/posts", { todo ,name} )
            .then(() => {
                alert("data posted")
                setTodo('')
                setName('')
            })
            .catch(() => {
                alert("data not posted")
            })
       }

       function getData(){
        axios.get("http://localhost:3000/posts")
        .then((response) => {
            setDb(response.data)
        })
        .catch(() => {
            alert("data not retrived")
        })
       }

       function updateData(id, data){
            axios.put(`http://localhost:3000/posts/${id}`,{ todo:data })
            .then(() =>{
                console.log("data updated");
                getData();
            })
       }
       function deleteTodo(id){
        axios.delete(`http://localhost:3000/posts/${id}`)
        .then(() => {
            alert("data deleted");
            getData();
        })
       }
       function newData(id){
        const data = prompt("Enter data")
        updateData(id,data)
       }
       console.log(db)
  return (
    <div className='Container'>
       
        <TextField 
        id="outlined-basic" 
        label="email" 
        variant="outlined" 
        value={todo}
        onChange={(ref) => setTodo(ref.target.value)}
        /><br />
        <TextField 
        id="outlined-basic" 
        label="name" 
        variant="outlined" 
        value={name}
        onChange={(ref) => setName(ref.target.value)}
        /><br />
         <Button variant="contained" onClick={dataPost}>Submit</Button>
         <Button variant="contained" onClick={getData}>Get</Button>
         <div>
            <ul>
                {
                    db.map((item) => (
                        <li key={item.id}>{item.todo} <Button
                        onClick={() => newData(item.id)}>Edit</Button>
                        <Button onClick={() => deleteTodo(item.id)}>Delete</Button></li>
                    ))
                }
            </ul>
         </div>
    </div>
  )
}

export default Todolist