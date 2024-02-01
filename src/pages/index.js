import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './_Login.module.css'
import Portfolio from '../components/Portfolio'
import Head from 'next/head'

function Login(){
    const [username, setUsername] = useState('')
    const router = useRouter()

    function handleSubmit(event){
        event.preventDefault()

        router.push(`/?u=${username}`)
    }

    if(router.query.u) return <Portfolio username={router.query.u} />

    return (
        <div className={styles.login}>
            <head>
                
	            <title>Open Source Portfolio Generator</title>
	            <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico">
            </head>

            <form onSubmit={handleSubmit}>
                <h1>Github Portfolio Generator</h1>
                <h2>By <a href="https://mranv.github.io">Anubhav</a></h2>
                <input
                    placeholder="Type your Github username"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <button type="submit">Generate Your Portfolio!</button>
            </form>
        </div>
    )
}

export default Login
