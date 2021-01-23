import './app-search-panel.css';
import React from 'react'
import {Component} from 'react'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(elem) {
        this.setState({text: elem.target.value})
        this.props.onSearch(this.state.text)
    }

    render() {
        return (<input onChange={(this.onValueChange)}  className="search-input form-control"
                        type='text' placeholder='Поиск'/>)
    }
}