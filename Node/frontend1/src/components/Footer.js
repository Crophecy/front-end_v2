import { Component } from "react";

//props = {personName :"Raj" , age:"23" , role:"Trainer"}
export class Footer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {brand:"adidas" , rating :"4.7"}
        //If you are writing the handleclic as a nornal the below lien is complusory
        // this.handleClick = this.handleClick.bind(this);
        //If you are using arrow function dont write the abovve line 
    }
    handleClick=()=>{
        this.setState({
            brand:"nike",
            rating:"5"
        });

    }
    render()
    {
        return(
            <div>
                <h1>My name is {this.props.personName} , I am {this.props.age} years old and I am working as a {this.props.role}</h1>
                <h1>The most popular brand is {this.state.brand} whose rating is {this.state.rating}</h1>
                <button onClick={this.handleClick}>Update</button>
            </div>
        )
    }
}
// export default Footer 
