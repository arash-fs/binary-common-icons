import React from 'react';

class Icon extends React.PureComponent {
    render() {
        return this.props.icon({...this.props})
    }
}

export default Icon;
