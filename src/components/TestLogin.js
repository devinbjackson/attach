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
        axios.post('/api/sendregister',{
            username: username,
            password: password
        })
    }


    render(){
            
        return(
            <div >
                <h1> Create a user account to test password encryption:</h1>
                <h3> Let me know what you think, this is just an idea</h3>
                <p> Username: </p>
                <input placeholder="username" onChange={(e) => this.usernameTypeHandler(e.target.value)}/>
                <p> Password: </p>
                <input placeholder="password" onChange={(e) => this.passwordTypeHandler(e.target.value)}/>
                <p style={{borderStyle: "solid", width: "10%"}} onClick={() => this.sendItBro(this.state.usernameText, this.state.passwordText)}>Submit button </p>
                <h3> Now check the DB, you should see the hashed password </h3>
                </div>
        )
    }
}
export default TestLogin
