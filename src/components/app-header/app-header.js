import './app-header.css';

const AppHeader = (props) => {

    return (
        <div>
            <div className="app-header">Ruslan Nemtsev</div>
            <h2>Всего записей: {props.allPosts}</h2>
            <h2>Понравилось: {props.totalLiked}</h2></div>
    )
}
export default AppHeader;