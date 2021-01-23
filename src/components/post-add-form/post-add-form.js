import './post-add-form.css';
import {Component} from 'react'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(elem) {
        this.setState({text: elem.target.value})
    }

    onSubmit(elem) {
        elem.preventDefault()
        this.props.onAdd(this.state.text)
        elem.target.reset()
        // elem.target.input.value = ""
    }
    render() {
        return (<form onSubmit={this.onSubmit} className='bottom-panel d-flex'>
            <input onChange={(this.onValueChange)} type='text' placeholder='Новая запись'
                   className='form-control new-post-label'/>
            <button type='submit' className='btn btn-outline-secondary'>Добавить
            </button>
        </form>)
    }
}



