import React, { Component } from 'react';
var randomColor = require('randomcolor');

const props = ['hello', 'hi', 'yo']

let color = randomColor()
class YoClass extends Component {
    render() {
        return props.map(prop => {
            return (<div class="one-third column" style={{ backgroundColor: randomColor() }} >
                <p>{prop}</p>
            </div>)
        })

    }

}
export default YoClass
