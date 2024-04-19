import React, { useState } from "react";
import styles from './styles/styles.module.css'




function App() {

  const [value, setValue] = useState('')
  const [res, setRes] = useState([])
  const [del, setDel] = useState([])
  const allElements = []
  

  const check = (event) => {
    const img = event.target
    const predok = img.closest('.li-item')

    console.log(predok.innerText)
    
    const copyDel = Object.assign([], del)
    copyDel.push(predok.innerText)
    console.log(copyDel)
    setDel(copyDel)
    predok.remove()
  }

  const deleteIMG = (event) => {
    const img = event.target
    const predok = img.closest('.li-item')
    predok.remove()

  }
  


  const result = res.map((item, index) => {
    return <li key={index} className='li-item'>
      {item}
      <div>
        <img src="Check.svg" className={styles.check}  onClick={(event) => check(event)} alt="check" />
        <img src="delete.svg" className={styles.delete} onClick={(event) => deleteIMG(event)} alt="delete"/>
      </div>
      </li>
  })


  

  const addItem = () => {
    const copy = Object.assign([], res)
    if (value !== '') {
      copy.push(value)
      setRes(copy)
      setValue('')
    }
  }

  const funcEnter = (event) => {
    if(event.key == 'Enter') {
      addItem()
    }
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <input onKeyUp={(event => funcEnter(event))} value={value} onChange={(event) => setValue(event.target.value)} />
        <button onClick={() => addItem()}>ADD</button>
      </div>
      <div className={styles.tusk}>
        <ul>
          {result}
        </ul>
      </div>
      <div className={styles.completed}>
        <div className={styles.completedtusk}>
          {<ul>
            {del.map(item => {
              return <li className={styles.lisuccess} key={item}>{item}</li>
            })}  
          </ul>}
        </div>
      </div>
    </div>
  )
}

export default App