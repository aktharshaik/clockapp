import React from 'react';

class Second extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        const {name} = this.props;
        return(
            <React.Fragment>
                <p>Inside Second.js</p>
                <p>Click the 'Change' Button to Change State, 'Restore' Button to Restore State.</p>
                <h1>{name}</h1>
            </React.Fragment>
        )
    }
}

export default Second