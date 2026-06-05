import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import styles from './pages.module.css'
import authServices from '../../services/auth.jsx'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Home() {
    const [formType, setFormType] = useState('login')
    const [formData, setFormData] = useState(null)
    const { login, signup, authLoading } = authServices()
    const navigate = useNavigate()
    
    const authData = JSON.parse(localStorage.getItem('auth'))


    useEffect(() => {

        if (authData) {
            return navigate('/profile')
        }

    }, [authData])


    const handleChangeFormType = () => {
        setFormData(null)
        if (formType === 'login') {

            setFormType('signup')
        }

        else {

            setFormType('login')
        }
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        switch (formType) {

            case 'login':

                login(formData)
                console.log('login')
                break

            case 'signup':
                if (formData.password !== formData.confirmPassword) {
                    console.log('passwords não são iguais')
                    return
                }
                signup(formData)
                break
        }
    }

    if (authLoading) {
        return (<h1>Loading...</h1>)
    }

    if (formType === 'login') {
        return (
            <>
                <div className={styles.authPagesContainer}>
                    <h1>Login</h1>
                    <button onClick={handleChangeFormType}>Não tenho conta? clique aqui</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField
                            required
                            label="Email"
                            type='email'
                            name='email'
                            onChange={handleFormDataChange}
                        />

                        <TextField
                            required
                            label="Password"
                            type='password'
                            name='password'
                            onChange={handleFormDataChange}
                        />
                        <Button type='submit' disabled={authLoading}>
                            {authLoading ? 'Loading...' : 'Login'}
                        </Button>
                    </form>
                </div>
            </>
        )
    }
    if (formType === 'signup') {
        return (
            <>
                <div className={styles.authPagesContainer}>
                    <h1>Signup</h1>
                    <button onClick={handleChangeFormType}>Já tenho conta? clique aqui</button>
                    <form onSubmit={handleSubmitForm}>

                        <TextField
                            required
                            label="fullname"
                            type='text'
                            name='fullname'
                            onChange={handleFormDataChange}
                        />

                        <TextField
                            required
                            label="Email"
                            type='email'
                            name='email'
                            onChange={handleFormDataChange}
                        />

                        <TextField
                            required
                            label="Password"
                            type='password'
                            name='password'
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label=" Confirm Password"
                            type='password'
                            name='confirmPassword'
                            onChange={handleFormDataChange}
                        />
                        <Button type='submit' disabled={authLoading}>
                            {authLoading ? 'Loading...' : 'Signup'}
                        </Button>
                    </form>

                </div>
            </>
        )
    }


}