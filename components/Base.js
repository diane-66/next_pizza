import React from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Base = () => {
    const [validate, setValidate] = useState(false);

    return (
        <>
            <ul> 
                <li><span>Classic</span></li>
                <li><span>Classic</span></li>
                <li><span>Classic</span></li>
            </ul>
        </>
    )
}

export default Base