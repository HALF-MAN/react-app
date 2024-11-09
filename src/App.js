import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react'

function App() {
  const list = [
    {id:1, name:'小吴'},
    {id:2, name:'小李'},
    {id:3, name:'小花'}
  ]
  const listContent = list.map(item=>(
    <Fragment key={item.id}>
      <li>{item.name}</li>
      <li>-----------</li>
    </Fragment>
  ))
  const [content, setContent] = useState({
    title:'默认标题',
    content:'默认内容'
  }) //响应状态,返回值分别是变量值和更新变量的方法


  function handleClick(e) {
    setContent({
      ...content, //state默认是全部替换，所以要把就属性值搬过来展开
      title:'新标题' // 用新属性值覆盖旧属性值
    })
  }

  const imgData = {
    className: 'small',
    style: {
      width:200,
      height: 200,
      backgroundColor: 'grey'
    }
  }

  return (
    <>
      <ul>{listContent}</ul>
      <button onClick={handleClick}>按钮</button>
      <div title={content.title}>{content.content}</div>
      <img src = {logo} 
        alt=''
        {...imgData}
      />
    </>
  )
}
//函数式组件
export default App;
