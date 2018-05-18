import React, { Component } from 'react'
import App from './App'
import axios from 'axios'

class CreateUser extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName (e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeEmail (e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePassword (e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault()
        let url = window.Laravel.baseUrl + '/api/users'
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post(url, data)
            .then(response => {
                this.props.history.push('/users')
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render () {
        return (
            <App>
                <h1>Create An User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' className='form-control' id='name' placeholder='Name'
                               value={this.state.name} onChange={this.handleChangeName} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control' id='email' placeholder='Email'
                               value={this.state.email} onChange={this.handleChangeEmail} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' id='password' placeholder='Password'
                               value={this.state.password} onChange={this.handleChangePassword} required />
                    </div>
                    <button type='submit' className='btn btn-primary'>Add User</button>
                </form>
            </App>
        )
    }
}
export default CreateUser