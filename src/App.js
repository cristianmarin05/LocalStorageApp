import React,{useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Post from './components/Post'

function App() {
  const [data, setData] = useState({
    name:"",
    message:""
  })
  const [allPosts, setAllPosts] = useState([]);
  const [refreshPosts, setRefreshPosts] = useState(false);

  useEffect(()=>{
    const allMessages = JSON.parse(localStorage.getItem("Messages"));
    setAllPosts(allMessages);
    setRefreshPosts(false);
  },[refreshPosts])

  return (
    <>
      <Header />
      <Form setData={setData} data={data} setRefreshPosts={setRefreshPosts}/>
      <Post allPosts={allPosts} setRefreshPosts={setRefreshPosts}/>
    </>
  );
}

export default App;
