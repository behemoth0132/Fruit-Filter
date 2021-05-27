import React, { Component } from 'react'; 

class List extends Component {
    render() {
        // [fruitItems]: iterate through the list of fruits that are passed down as props and display each as an li
        const fruitItems = this.props.fruits.map((f, idx) => {
            return <li key={idx}>{f}</li>
        });
        return (
            <ul>
                {/* list of fruits will go here */}
                {fruitItems}
            </ul>
        )
    }
}

export default List;