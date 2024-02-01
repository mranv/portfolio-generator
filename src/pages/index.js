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
            <Head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	            <title>Open Source Portfolio Generator</title>
	            <meta name="description" content="Anubhav Gain is a dedicated and passionate IT Specialist with expertise in system support, lab tech, and cybersecurity. Currently working at Parul University, Anubhav excels in providing exceptional technical troubleshooting and support to ensure smooth operations. Specializing in Cyber/Computer Forensics and Counterterrorism, Anubhav holds multiple certifications and possesses expertise in Transport Layer Security (TLS), Traceroute, OSI Model, DNS, and CentOS. With a commitment to continuous learning and growth, Anubhav is highly valued for their exceptional diplomacy, communication skills, and ability to work effectively within teams. Anubhav is a valuable asset with a strong dedication to excellence in all aspects of their work.">
	            <meta name="keywords" content="Anubhav Gain, IT Specialist, System Support, Cybersecurity, Cyber Forensics, Counterterrorism, Technical Troubleshooting, Transport Layer Security, Traceroute, OSI Model, DNS, CentOS, Parul University">
	            <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico">
            </Head>

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
