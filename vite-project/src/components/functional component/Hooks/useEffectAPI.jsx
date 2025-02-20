import axios from "axios";
import { useEffect, useState } from "react";

const useEffectAPI = () =>{
    var [posts,setPost] = useState([]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data);
            setPost(res.data);
        })
        .catch((err)=> console.log("Error fetching data",err));
    },[]);
    return(
        <div>
        <h1>This is useEffect example with API call</h1>
        <h2>We are going to fetch data from JSONPlaceholder and display the data.</h2>
        {}
        <ol>
        {posts.map((post)=>(
                <li>{post.title}</li>
        ))}
        </ol>
        </div>
    )
}
export default useEffectAPI;