import React, { useEffect, useState } from "react";
import {Routes,Route, Link} from 'react-router-dom'
import './App.css';
import ARandom from './Pages/ARandom';
import BuseState from './Pages/BuseState';
import Cusetate from './Pages/Cusestate';
import DList from './Pages/DList';
import EProps from './Pages/EProps';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import IFormAdd from "./Pages/IFormAdd";
import axios from "axios";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Newpost from "./Pages/Newpost";
import Postpage from "./Pages/Postpage";
import Post from "./Pages/Post";
import Error from "./Pages/Error";
import Usewindow from "./hook/useWindow";


import { DataProvider } from "./context/Datacontext";


const API_URL = `http://localhost:3500/items`

function App() {


  //Props drilling first step
  //This is sent to EProps components
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todo_list')) || 
    []
  //   [
  //   {
  //     id: 1,
  //     item: "Pratice Coding",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     item: "Play Cricket",
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     item: "Eat Food",
  //     checked: false,
  //   },
  // ]
  );

  const [fetchError,setFetchError]=useState(null)

  useEffect(()=>{
   // JSON.parse(localStorage.getItem('todo_list'))
   fetchItems()
  },[])

  const fetchItems = async()=>{
    try{
      const response = await axios.get(API_URL)
      console.log(response.data);
      if(!response.ok) throw Error("DATA NOTA")
      setItems(response.data)
      setFetchError(null)
    }
    catch (err){
      setFetchError(err.message)
    }
  }


  const handleCheck = (id)=>{
    console.log(`id:${id}`)
    const litstItems = items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)

    setItems(litstItems)
    localStorage.setItem("todo_list",JSON.stringify(litstItems))
  }

  const handleDelete = (id)=>{
    console.log(`ids:${id}`)
    const listdelete = items.filter((item)=>item.id !== id)
    setItems(listdelete)
    localStorage.setItem("todo_list",JSON.stringify(listdelete))
  }




  //form code additem
  const [newItem,setNewItem]=useState("")

  const addItem = (item)=>{
    const id=items?.length ? items[items.length-1].id+1:1;
    const addNewItem = {id,checked:false,item}
    const litstItems=[...items,addNewItem]
    setItems(litstItems)
    localStorage.setItem("todo_list",JSON.stringify(litstItems))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("submited");

    if(!newItem) return;
    console.log(newItem);
    addItem(newItem)
    setNewItem("")
  }



  const {width}=Usewindow()
  return (
    <>
    <DataProvider>
    <Header title="React JS Full Course - Revision" width={width} />
    <div className="App">
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/new-post">New Post</Link> </li>
          <li> <Link to="/post-page">Post Page</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/new-post" element={<Newpost/>} />
        <Route path="/post-page" element={<Postpage/>} />
        <Route path="/post-page/:id" element={<Post/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <h2>Hello World</h2>
      <ARandom />
      <BuseState />
      <Cusetate />
      <IFormAdd 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      
      />
      <DList />

      <EProps
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />

{/* <Usewindow /> */}
    </div>

    {/* footer lenth showing using props and props drilling method */}
    <Footer 
    
    length={items?.length}
    
    />
    </DataProvider>
    </>
  );
}

export default App;
