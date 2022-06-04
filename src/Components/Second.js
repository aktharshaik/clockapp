import React from 'react';

class Second extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <p>This is from Second.js. Click the Button to Change State</p>
                <h1>{this.props.name}</h1>
            </React.Fragment>
        )
    }
}

export default Second