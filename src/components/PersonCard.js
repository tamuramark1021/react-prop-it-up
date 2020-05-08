import React, { Component } from 'react';

// class PersonCard extends React.Component{
//     state={
//         age: this.props.age
//     }
//     IncreaseAge = () =>{
//         if(this.state.age>100){
//             console.log("YOU DED")
//         }
//         this.setState({age: this.state.age+1})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>{`Age: ${this.state.age}`}</p>
//                 <button className="btn" onClick={this.IncreaseAge}>Increase yo age</button>

//                 <h3>Hair Color: {this.props.hairColor}</h3>
//             </div>
//         );
//     }
// }

const PersonCard = props=>{
    this.state={
        age: this.props.age
    }
    const IncreaseAge = () =>{
        this.setState({age: this.state.age+1})
    }
    
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <button className="btn" onClick={this.IncreaseAge}>Increase yo age</button>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
export default PersonCard;