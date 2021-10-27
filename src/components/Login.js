import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { saveName } from '../actions/auth';
import { Link } from 'react-router-dom'


const Login = ({ saveName }) => {
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [disable, setDisable] = useState(true)

    const { username, password } = formData;

    const loginData = {
        username: 'developer21',
        password: '123456'
    }

    const loginCompare = JSON.stringify(loginData) === JSON.stringify(formData);

    useEffect(() => {
        if(loginCompare === true) {
            setDisable(false)
        } else {
            setDisable(true)
        } 
    }, [formData]);

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        saveName(username);
    };

    return (
        <div className='container mt-5 p-5 rounded shadow' style={{width: '30%', backgroundColor: '#f6f6f6'}}>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control shadow'
                        type='username'
                        placeholder='username'
                        name='username'
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control shadow'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
               
               <Link to='/profile'><button to='/profile' 
                className='btn btn-primary shadow' 
                type='submit' 
                onFocus={onSubmit} 
                disabled={disable}>Login</button></Link>
                
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    saveName: state.auth.saveName
});

export default connect(mapStateToProps, { saveName })(Login);
