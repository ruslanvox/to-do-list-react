import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onLike, onImportant}) => {
    const elements = posts.map((i) => {
        console.log(i)
        return (
            <li key={i.id} className={"list-group-item"}>
                <PostListItem label={i.label}
                              onDelete={()=>onDelete(i.id)}
                              onLike={()=>onLike(i.id)}
                              onImportant={()=>onImportant(i.id)}/>
            </li>
        )
    })
    console.log(elements)
    return (<ul className='app-list list-group'>
        {elements}
    </ul>)
}
export default PostList
