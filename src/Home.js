import Bloglist from './Bloglist';
import useFetch from './Usefetch';

const Home = () => {
      const {data: blogs,isPending,error} = useFetch("http://localhost:8000/blogs")
     return (  
        <div className="homepage">
            {error && <p>{error}</p>}
            {isPending && <p>Loading Page..Please Wait!</p>}
            {blogs && <h1>Blogs</h1>}
            {blogs && <Bloglist blogs={blogs}/>}
        </div>
    );
}
 
export default Home;