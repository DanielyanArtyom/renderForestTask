import React from 'react'
import styles from './ClientELement.module.css'

const ClientElement = (props) => {
    const { index, stateArrEl, inputHandler, deFocus, autofocus } = props
    return (
        <li className={styles.ListElement}>
            <p>{stateArrEl.indexCounter}</p>
            <input type='text' className={styles.inputText} onChange={inputHandler(index)} value={stateArrEl.text} onBlur={() => deFocus(index)} autoFocus={autofocus} />
        </li>
    )
}

export default ClientElement