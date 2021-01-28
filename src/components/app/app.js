import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from '../post-add-form'
import './app.css'
import {Component} from "react"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.count = 4;
        this.state = {
            filteredData:[],
            data: [
                {label: "Помыть посуду", important: false, id: 1, like: false},
                {label: "Вынести мусор", important: false, id: 2, like: false},
                {label: "Купить молоко", important: false, id: 3, like: false}
            ], term: ''
        }
        this.state.filteredData = this.state.data;
        this.onDelete = this.onDelete.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onImportant = this.onImportant.bind(this)
        this.addPost = this.addPost.bind(this)
        this.onSearch = this.onSearch.bind(this)


    }

    addPost(text) {
        let newElement = {label: text, important: false, id: this.count++, like: false}
        this.setState((state) => {
            let newData = state.data.slice()
            newData.push(newElement)
            return {data: newData}
        })
    }

    onSearch(text) {
        this.setState((state) => {
            let newData = state.data.filter((elem) => {
                return elem.label.indexOf(text) !== -1;
            })
            return {data: newData}

        })
    }


    onImportant(id) {
        // console.log(id)
        this.setState((state) => {
                let newData = JSON.parse(JSON.stringify(state.data));
                let index = newData.findIndex((elem) => {
                    return elem.id === id;
                })
                newData[index].important = !newData[index].important;
                return {data: newData}
            }
        )

    }

    onLike(id) {
        console.log(id)
        this.setState(({data}) => {
                let newData = JSON.parse(JSON.stringify(data));
                let index = newData.findIndex((elem) => {
                    return elem.id === id;
                })
                newData[index].like = !newData[index].like;
                return {data: newData}
            }
        )

    }

    render() {
        let postCount = this.state.data.length;
        let likeCount = this.state.data.filter((elem) => {
          return elem.like == true
        }).length;
        return <div className={'app'}>
            <div><AppHeader allPosts={postCount} totalLiked={likeCount} /></div>
            <div className={'search-panel d-flex'}><SearchPanel onSearch={this.onSearch}/><PostStatusFilter/></div>
            <div><PostList posts={this.state.data} onDelete={this.onDelete}
                           onLike={this.onLike} onImportant={this.onImportant}/></div>
            <div><PostAddForm onAdd={this.addPost}/></div>
        </div>
    }

    onDelete(id) {
        this.setState(({data}) => {
            let newData = Array.from(data) //let newData = [...data] - альтернативный способ получения нового массива из data
            let index = newData.findIndex((e) => {
                return e.id == id //сокращенная запись let index = newdata.findIndex(e => e.id ==id)
            })
            newData.splice(index, 1)
            return {data: newData}
        })
    }

}
