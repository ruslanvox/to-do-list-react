import './post-status-filter.css';
import react, {Component} from 'react'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
            {name: 'important', label: 'Важное'}]
    }

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            // тернарный оператор условия if, сокращенная запись
            const clazz = this.props.filter === name ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button key={name}
                        className={`btn ${clazz}`}
                        type="button"
                        onClick={() => this.props.onFilterSelect(name)}>{label}</button>
            )
        });
        return (<div className='btn-group'>
            {buttons}
        </div>)
    }

}

