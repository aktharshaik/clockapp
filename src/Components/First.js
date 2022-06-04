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
                <p align="left">First.js Ends Here</p>
                {element}
            </div>
        )
    }
}

export default First