import React from 'react';

class Second extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {name} = this.props;
        return(
            <React.Fragment>
                <p>In Second.js Click the Button to Change State</p>
                <h1>{name}</h1>
            </React.Fragment>
        )
    }
}

export default Second