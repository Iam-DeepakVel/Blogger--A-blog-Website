import { Navigate, useParams } from "react-router-dom";
import useFetch from "./Usefetch";
import { useNavigate } from "react-router-dom";

const Blogdetails = () => {
    const {id} = useParams();
    const {data,isPending,error} = useFetch('http://localhost:8000/blogs/'+ id)
    const navigate= useNavigate();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ data.id , {
            method:"DELETE"
        }).then(()=>{
            navigate('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data &&  (
               <article>
               <h2>{data.title}</h2>
               <h4>Written by {data.author}</h4>
               <p><span>Description:</span> {data.desc}</p>
               <div>
                   {data.cont}
               </div>
               <button onClick={handleClick}>Delete Blog</button>
               </article>
            )          
            }
        </div>
     );
}
 
export default Blogdetails;