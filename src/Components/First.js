import React from 'react';
import Second from './Second';

class First extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Constructor State'
        }
    }

    changeName = () =>{
        this.setState({
            name: 'Change Clicked'
        }

        )
    }

    restoreName = () =>{
        this.setState({
            name: 'Constructor State'
        }

        )
    }

    render(){
        var element;
        if(this.state.name === 'Constructor State'){
            element = <Second name={'Default State'} />
        }
        else{
            element = <Second name={this.state.name} />
        }

        return(
            <div>
                <p align="left">First.js Start Here</p>
                <h2>Initial name is : {this.state.name}</h2>
                <button onClick={this.changeName}>Change</button>
                <button onClick={this.restoreName}>Restore</button>
                <p align="center">This is call to element variable. Output is from Second.js {element}</p>
                <p align="left">First.js Ends Here</p>
            </div>
        )
    }
}

export default First