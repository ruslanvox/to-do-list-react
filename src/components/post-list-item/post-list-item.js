import './post-list-item.css';
import {Component} from 'react';

const postListItem = ({label, onDelete, onLike, onImportant, important, like}) => {
    let classNames = "app-list-item d-flex justify-content-between";
    if (important == true) {
        classNames += " important"
    }
    if(like == true) {
        classNames += " like"
    }
    return (<div className={classNames}>
        <span onClick={onLike} className={'app-list-item-label'}>{label}</span>
        <div className={classNames}>
            <button onClick={onImportant} type='button' className='btn-star btn-sm'><i
                className='fa fa-star'></i></button>
            <button onClick={onDelete} type='button' className='btn-trash btn-sm'><i className='fa fa-trash-o'></i></button>
            <i className='fa fa-heart'></i>
        </div>
    </div>)
}
export default postListItem