import { Route } from "react-router";
import PostsFull from "./PostFull/PostFull"
import PostsList from "./PostsList/PostsList"

const Posts = ({match}) => {
    console.log(match)
    return ( <div>
        {match}
        <PostsList /> 
        <Route path="/posts/:id" component={PostsFull}  />
    </div> 
    );
}
export default Posts;