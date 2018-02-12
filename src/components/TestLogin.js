import React, {Componenet} from 'react'
import axios from 'axios'

class TestLogin extends Componenet{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p> Username: </p>
                <input placeholder="username"/>
                <p> Password: </p>
                <input placeholder="password" />

                </div>
        )
    }
}
export default TestLogin
