import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onLike, onImportant}) => {
    const elements = posts.map((item) => {
        return (
            <li key={item.id} className={"list-group-item"}>
                <PostListItem label={item.label}
                              onDelete={onDelete(item.id)}
                              onLike={onLike(item.like)}
                              onImportant={onImportant(item.important)}/>
            </li>
        )
    })
    return (<ul className='app-list list-group'>
        {elements}
    </ul>)
}
export default PostList