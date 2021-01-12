import './post-list-item.css';
import {Component} from 'react';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {important: false, like: false}
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this)
    }

    onImportant() {
        this.setState(({important}) => (
            {important: !important}
        ))
    }
    onLike() {
        this.setState(({like}) => (
            {like: !like}
        ))
    }


    render() {
        const {label, onDelete} = this.props;
        const {important, like} = this.state;
        let classNames = "app-list-item d-flex justify-content-between";
        if (important == true) {
            classNames += " important"
        }
        if(like == true) {
            classNames += " like"
        }
        return (<div className={classNames}>
            <span onClick={this.onLike} className={'app-list-item-label'}>{label}</span>
            <div className={classNames}>
                <button onClick={this.onImportant} type='button' className='btn-star btn-sm'><i
                    className='fa fa-star'></i></button>
                <button onClick={onDelete} type='button' className='btn-trash btn-sm'><i className='fa fa-trash-o'></i></button>
                <i className='fa fa-heart'></i>
            </div>
        </div>)
    }
}