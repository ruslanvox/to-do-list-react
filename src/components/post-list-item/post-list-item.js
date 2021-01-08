const PostListItem = ({label,important = false}) => {
    let classImportantAdd = "d-flex";
    if(important == true) {
        classImportantAdd += " important"
    }


    return (<li className='app-list-item d-flex'>
        <span>{label}</span>
        <div className={classImportantAdd}>
            <button className='btn-star'>*</button>
            <button className='btn-trash'>x</button>
        </div>
    </li>)
}
export default PostListItem