import React, { useState } from 'react'
import ClientElement from './ClientElement/ClientELement'
import styles from './ClientList.module.css'

const ClientList = (props) => {
    const [stateArr, setStateArr] = useState([{ indexCounter: 1, text: '', isFocused: false }]);

    const removeHandler = (elIndex) => {
        if (stateArr.length !== 1 && stateArr[elIndex].indexCounter !== stateArr[stateArr.length - 1].indexCounter) {
            console.log(elIndex)
            let newList = stateArr.filter((item) => item.indexCounter !== stateArr[elIndex].indexCounter);
            newList = newList.map(item => item.indexCounter >= newList[elIndex].indexCounter ? { ...newList, indexCounter: newList[elIndex].indexCounter - 1 } : item)
            setStateArr(newList)
        }
    }

    const inputHandler = (elIndex) => event => {
        let currentValue = event.target.value;
        setStateArr(
            stateArr.map(element => element.indexCounter === stateArr[elIndex].indexCounter ? { ...element, text: currentValue, isFocused: true } : element)
        )
        if (stateArr[elIndex].indexCounter === stateArr[stateArr.length - 1].indexCounter && stateArr[elIndex].text !== '') {
            setStateArr([...stateArr, { indexCounter: stateArr[elIndex].indexCounter + 1, text: '' }])
        } else if (stateArr[elIndex].text === '') {
            removeHandler(elIndex)
        }
    }

    const deFocus = (elIndex) => {
        setStateArr(
            stateArr.map(element => element.indexCounter === stateArr[elIndex].indexCounter ? { ...element, isFocused: false } : element)
        )
    }

    return (
        <section className={styles.Container}>
            <div className={styles.Wrapper}>
                <div className={styles.Header}>
                    <h2>{props.Name}</h2>
                </div>
                <div className={styles.ListWrapper}>
                    <ul className={styles.List}>
                        {stateArr.map((element, index) => {
                            return <ClientElement
                                key={Math.random()}
                                stateArrEl={element}
                                deFocus={deFocus}
                                index={index}
                                autofocus={element.isFocused}
                                inputHandler={inputHandler}
                            />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ClientList;