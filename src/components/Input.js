import React, { Component } from 'react'; 

class Input extends Component {
    render() {
       
        return (
            <div>
                <label htmlFor="fruit-filter">Filter these fruits: </label>
                <input type="text" name="fruit-filter" id="fruit-filter" value={this.props.fruitInput} onChange={this.props.filter} />
            </div>
        )
    }
}

export default Input;