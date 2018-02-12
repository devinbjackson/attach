import React, {Component} from 'react'
import axios from 'axios'

class TestLogin extends Component{
    constructor(){
        super()
        this.state = {
            passwordText: "",
            usernameText: ""
        }
    }

    passwordTypeHandler(val){
        this.setState({passwordText: val})
    }
    usernameTypeHandler(val){
        this.setState({usernameText: val})
    }
    sendItBro(username, password){

    }

    render(){
        return(
            <div >
                <p> Username: </p>
                <input placeholder="username" onChange={(e) => this.usernameTypeHandler(e.target.value)}/>
                <p> Password: </p>
                <input placeholder="password" onChange={(e) => this.passwordTypeHandler(e.target.value)}/>
                <p style={{borderStyle: "solid", width: "10%"}} onClick={() => this.sendItBro(this.state.usernameText, this.state.passwordText)}>Submit button </p>

                </div>
        )
    }
}
export default TestLogin
