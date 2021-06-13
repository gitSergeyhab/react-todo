import React, {Component} from 'react';

export default class AddItem extends Component {

    state = {
        inputValue: ''
    }

    onTextInput = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }

    onAddSubmit = (evt) => {
        evt.preventDefault();
        this.props.onAddItem(this.state.value);
        this.setState({
            value: ''
        })
    }



    render() {
        
        return (
            <form 
                onSubmit={this.onAddSubmit}
            >
                <input
                    type='text'
                    placeholder='What needs?'
                    onChange={this.onTextInput}
                    value={this.state.value}>
                </input>
                <button 
                    type='submit'
                    className='btn btn-dark'
                    
                    // onClick={() => onAddClick('Very new!')}
                >Add DO</button>
            </form>

        )
    }
}
