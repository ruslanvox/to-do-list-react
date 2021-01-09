import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostListItem from '../post-list-item'
import PostAddForm from '../post-add-form'
import './app.css'

const data = [{label: "Помыть посуду", important: true}, {
    label: "Вынести мусор",
    important: true
}, {label: "Купить молоко", important: true}]

const App = () => {
    return <div className={'app'}>
        <div><AppHeader/></div>
        <div className={'search-panel d-flex'}><SearchPanel/><PostStatusFilter/></div>
        <div><PostList posts={data}/></div>
        <div><PostAddForm/></div>
    </div>
}
export default App;