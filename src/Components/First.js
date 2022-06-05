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


  checkName = () => {
    return this.state.name === "Constructor State"
      ? "Default State"
      : this.state.name;
  }

    render(){
        return(
            <div>
                <p align="left">First.js Start Here</p>
                <h2>Initial name is : {this.state.name}</h2>
                <button onClick={this.changeName}>Change</button>
                <button onClick={this.restoreName}>Restore</button>
                <p align="center">This is call to element variable. Output is from Second.js</p>
                <Second name={this.checkName()} />
                <p align="left">First.js Ends Here</p>
            </div>
        )
    }
}

export default First
