import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [cont,setCont]=useState('');
    const [author,setAuthor]=useState('');
    const [isPending,setIspending] = useState(false);
    const navigate = useNavigate();
    
const handleSubmit =(e) =>{
    e.preventDefault();
    const blog = {title,desc,author,cont};
    setIspending(true);
    fetch('http://localhost:8000/blogs',{
        method:"POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log("New blog Added");
        setIspending(false);
        navigate("/");

    });

}    
    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title} 
                onChange={(e)=> setTitle(e.target.value) }
                />

                <label>Blog Description:</label>
                <textarea 
                required
                value={desc}
                onChange={(e)=>{setDesc(e.target.value)}}
                ></textarea>

                <label>Blog Content:</label>
                <textarea 
                required
                value={cont}
                onChange={(e)=>{setCont(e.target.value)}}
                ></textarea>

                <label>Blog Author:</label>
                <input 
                required
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                </input>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;