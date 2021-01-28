import './app-search-panel.css';
import React from 'react'
import {Component} from 'react'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(elem) {
        const term = elem.target.value;
        this.setState({term});
        this.props.onValueChange(term)
    }

    render() {
        return (<input onChange={(this.onValueChange)}  className="search-input form-control"
                        type='text' placeholder='Поиск'/>)
    }
}