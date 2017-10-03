import React, { Component } from 'react';
import { get } from 'lodash';
const yo = {
    my: {
        name: 'asdf'
    }
}
class About extends Component {
    render() {
        const name: String = get(yo, 'my.name');
        return (
            <div>
                About hi {name}
            </div>
        );
    }
}

export default About;