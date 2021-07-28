// 関数コンポーネント内で state を使えるようにするため、useState をインポート 
import React, { useState } from 'react'
import './styles.css'

const Counter = () => {
  // countの初期値として、1~10までのランダムな数値を生成
  const initialState = Math.floor(Math.random() * 10) + 1
  // count という名前の state 変数を宣言、初期値 initialState をセット
  const [count, setCount] = useState(initialState)
  // open という名前の state 変数を宣言、初期値 true をセット
  const [open, setOpen] = useState(true)
  // toggleの関数を宣言
  const toggle = () => setOpen(!open)

  return (
    <>
        <a href="https://mbp.hatenablog.com/entry/2021/07/10/211218" target="_blank" rel="noreferrer">MacでReact</a><br />
        <a href="https://qiita.com/seira/items/f063e262b1d57d7e78b4" target="_blank" rel="noreferrer">React hooksを基礎から理解する (useState編)</a><br />
      <button className="siimple-btn siimple-btn--teal" onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>現在の数字は{count}です</p>
        {/* setCount()は、countを更新するための関数。countを引数で受け取ることも出来る */}
        <button className="siimple-btn siimple-btn--teal" onClick={() => setCount(prevState => prevState + 1)}>
          + 1
        </button>
        <button className="siimple-btn siimple-btn--teal" onClick={() => setCount(count - 1)}>- 1</button>
        <button className="siimple-btn siimple-btn--teal" onClick={() => setCount(0)}>０</button>
        <button className="siimple-btn siimple-btn--teal" onClick={() => setCount(initialState)}>最初の数値に戻す</button>
      </div>
    </>
  )
}

export default Counter
