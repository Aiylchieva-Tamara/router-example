import {  Link } from "react-router-dom";
const PostsList = () => {
    const results = [];
    for (let id = 1; id <= 5; id++) {
        results.push(<li><Link to={"/posts/" + id}>Post number #{id}</Link></li>)
        
    }
    return ( <div>posts</div> );
}
export default PostsList;