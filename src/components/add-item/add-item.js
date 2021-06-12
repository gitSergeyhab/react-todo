import React, {Component} from 'react';

export default class AddItem extends Component {
    render() {
        const {onAddClick} = this.props;
        return (
            <button 
                type='button'
                className='btn btn-dark'
                onClick={onAddClick}
            >Add DO</button>
        )
    }
}
