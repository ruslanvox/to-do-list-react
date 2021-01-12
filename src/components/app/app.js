import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostListItem from '../post-list-item'
import PostAddForm from '../post-add-form'
import './app.css'
import {Component} from "react"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Помыть посуду", important: true, id: 123},
                {label: "Вынести мусор", important: true, id: 456},
                {label: "Купить молоко", important: true, id: 789}
            ]
        }
        this.onDelete = this.onDelete.bind(this)
    }

    render() {
        return <div className={'app'}>
            <div><AppHeader/></div>
            <div className={'search-panel d-flex'}><SearchPanel/><PostStatusFilter/></div>
            <div><PostList posts={this.state.data} onDelete={(id) => this.onDelete(id)}/></div>
            <div><PostAddForm/></div>
        </div>
    }

    onDelete(id) {
        this.setState(({data}) => {
          return {data: [
                  {label: "Помыть посуду", important: true, id: 123},
                  {label: "Вынести мусор", important: true, id: 456}
              ]}
        })
    }

}
