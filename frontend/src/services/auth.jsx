import { useState } from "react"

export default function authServices() {
    const [authLoading, setAuthLoading] = useState(false)

    const url = 'http://localhost:3000/auth'

    const login = (FormData) => {
        setAuthLoading(true)
        fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-Control-Allow-Origin': '*'

            },
            body: JSON.stringify(FormData)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.success && result.doby.token) {

                    localStorage.setItem(
                        'auth',
                        JSON.stringify({ token: result.body.token, user: result.body.user })
                    )
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setAuthLoading(false)
            })
    }

    const logout = () => {

    }

    const signup = (FormData) => {
        setAuthLoading(true)
        fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-Control-Allow-Origin': '*'

            },
            body: JSON.stringify(FormData)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.success && result.doby.token) {

                    localStorage.setItem(
                        'auth',
                        JSON.stringify({ token: result.body.token, user: result.body.user })
                    )
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setAuthLoading(false)
            })
    }

    return { signup, login, logout, authLoading }

}
