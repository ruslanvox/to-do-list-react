import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onLike, onImportant, like, important}) => {
    const elements = posts.map((i) => {
        return (
            <li key={i.id} className={"list-group-item"}>
                <PostListItem label={i.label}
                              {...i}
                              onDelete={()=>onDelete(i.id)}
                              onLike={()=>onLike(i.id)}
                              onImportant={()=>onImportant(i.id)}/>
            </li>
        )
    })
    // console.log(elements)
    return (<ul className='app-list list-group'>
        {elements}
    </ul>)
}
export default PostList