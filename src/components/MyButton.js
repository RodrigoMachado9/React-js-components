import React, { Component } from 'react';
import Time from "./Time";

 const INITIAL_STATE = {
  isOn: true

};


class MyButton extends Component{

    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
        this.handleClick = this.handleClick.bind(this); // função bind sobrescreve o scopo atual do this.

    }


    sayHello(event){
        event.preventDefault();
        alert('Hello!!')
    }


    handleClick(event, param){
        console.log(this);
        console.log(param)
        this.setState((state, props) => {
            return {isOn: !state.isOn};                 // altera o stado atual do isON, conforme handleClick
        })
    }

    render() {
        // const state =  this.state;
        return(
            // arrow function . . . . . is here, passando parametros..
            <div>
                <button onClick={(event)=>{this.handleClick(event, 'hello_world')}}>{this.state.isOn ? 'Desligar': 'Ligar'}</button>
                {this.state.isOn? <Time/>: <p> Counter is Off</p>}
            </div>

            // <button onClick={this.handleClick}>{this.state.isOn ? 'Desligar': 'Ligar'}</button>

        )
    }
}

// function MyButton(props) {
//     function sayHello(){
//         alert('Hello!!')
//     }
//     return(
//         <button onClick={sayHello}>Click Me</button>
//     )
// }


export default MyButton;