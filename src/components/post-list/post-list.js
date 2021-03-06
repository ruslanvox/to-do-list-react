import PostListItem from '../post-list-item';
import './post-list.css';
const PostList = ({posts, onDelete})=> {
    const elements = posts.map((item) => {
        return(
<li key={item.id} className={"list-group-item"}>
    <PostListItem label={item.label} onDelete={() => onDelete(item.id)}/>
</li>
        )
    })
    return (<ul className='app-list list-group'>
        {elements}
    </ul>)
}
export default PostList