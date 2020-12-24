import React from 'react'
import axios from "axios"

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            userName:"",
            password:""
        }
    
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleChangeUserName=this.handleChangeUserName.bind(this)
    this.handleChangePassword=this.handleChangePassword.bind(this)
}

handleChangeUserName(e){
    this.setState({
        userName:e.target.value
    })
}

handleChangePassword(e){
    this.setState({
        password:e.target.value
    })
}

handleSubmit(e){
    const user={
        userName=this.state.userName,
        password=this.state.password

    }
    axios.post("http://localhost:3000/sessions",user)
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{ console.log(error)

    })
    e.preventDefault()
}

render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="userName"
                placeholder="userName"
                value={this.state.userName}
                onChange={this.handleChangeUserName}
                required>
                </input>

                <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                required>
                </input>


                <button type="submit">Login</button>

                </form>


        </div>
    )
}




}