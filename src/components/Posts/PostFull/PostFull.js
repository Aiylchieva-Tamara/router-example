import { Link } from "react-router-dom";

const PostsFull = (match) => {
    console.log(match)
    return ( 
        <div >
            <Link to="/posts">Back to posts</Link>
            <h1>Post #{match.params.id}</h1>
        </div>
    );
}
export default PostsFull;