import './post-list-item.css';

const PostListItem = ({label, important = false}) => {
    let classImportantAdd = "d-flex";
    if (important == true) {
        classImportantAdd += " important"
    }
    return (<li className='app-list-item d-flex justify-content-between'>
        <span className={'app-list-item-label'}>{label}</span>
        <div className={classImportantAdd}>
            <button type={'button'} className='btn-star btn-sm'><i className='fa fa-star'></i></button>
            <button type={'button'} className='btn-trash btn-sm'><i className='fa fa-trash-o'></i></button>
            <i className='fa fa-heart'></i>
        </div>
    </li>)
}
export default PostListItem