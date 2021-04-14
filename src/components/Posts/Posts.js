import { Route } from "react-router";
import PostFull from "./PostFull/PostFull"
import PostsList from "./PostsList/PostsList"

const Posts = ({match}) => {
    console.log(match)
    return ( <div>
        { match.isExact 
            ? <PostsList /> 
            : <Route path="/posts/:id" component={PostFull} />}
    </div> 
    );
}
export default Posts;