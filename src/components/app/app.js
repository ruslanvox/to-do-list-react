import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostListItem from '../post-list-item'
import PostAddForm from '../post-add-form'
import './app.css'

const data = [
    {label: "Помыть посуду", important: true, id: 123},
    {label: "Вынести мусор", important: true, id: 456},
    {label: "Купить молоко", important: true, id: 789}
]


const App = () => {
    return <div className={'app'}>
        <div><AppHeader/></div>
        <div className={'search-panel d-flex'}><SearchPanel/><PostStatusFilter/></div>
        <div><PostList posts={data} onDelete={(id)=>console.log(id)}/></div>
        <div><PostAddForm/></div>
    </div>
}
export default App;