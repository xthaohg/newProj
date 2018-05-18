import React, { Component } from 'react'
import App from './App'
import axios from 'axios'

class EditUser extends Component {
    constructor (props) {
        super(props)
        console.log(props)
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

    componentDidMount () {
        let url = window.Laravel.baseUrl + '/api/users/' + this.props.match.params.id + '/edit'
        axios.get(url)
            .then(response => {
                this.setState(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
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
        let url = window.Laravel.baseUrl + '/api/users/' + this.props.match.params.id
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.patch(url, data)
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
                <h1>Edit User</h1>
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
                    <button type='submit' className='btn btn-primary'>Update User</button>
                </form>
            </App>
        )
    }
}
export default EditUser