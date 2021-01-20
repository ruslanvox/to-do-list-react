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
        this.state = {
            data: [
                {label: "Помыть посуду", important: true, id: 123, like: false},
                {label: "Вынести мусор", important: false, id: 456, like: false},
                {label: "Купить молоко", important: false, id: 789, like: false}
            ]
        }
        this.onDelete = this.onDelete.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onImportant = this.onImportant.bind(this)


    }

    onImportant(id) {
        // console.log(id)
        this.setState(({data}) => {
                let newData = Array.from(data);
                let index = newData.findIndex((elem) => {
                    return elem.id === id;
                })
               let testData = (newData[index].important = !newData[index].important) ;
                console.log(testData)
            console.log(index)
                return {data:newData}
            }
        )

    }

    onLike(id) {
        console.log(id)
        this.setState(({data}) => {
                let newData = Array.from(data);
                let index = newData.findIndex((elem) => {
                    return elem.id === id;
                })
                // newData[index].like = !newData[index].like ;
                console.log(newData[index])
                console.log(index)
                return {data:newData}
            }
        )

    }

    render() {
        return <div className={'app'}>
            <div><AppHeader/></div>
            <div className={'search-panel d-flex'}><SearchPanel/><PostStatusFilter/></div>
            <div><PostList posts={this.state.data} onDelete={this.onDelete}
                           onLike={this.onLike} onImportant={this.onImportant}/></div>
            <div><PostAddForm/></div>
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
