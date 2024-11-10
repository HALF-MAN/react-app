import { useState } from "react"

//子组件传递值给父组件是通过事件的方式
function Detail({onActive}) {
    const [status, setStatus] = useState(false)
    function handleClick() {
        setStatus(!status)
        onActive(status)
    }
    return (
        <div>
            <button onClick={handleClick}>按钮</button>
            <p style = {{
                display:status? 'block':'none'}}>
                Detail的内容</p>
        </div>
    )
}

export default function FatherGetChildrenData() {
    function handleActive(status) {
        
    }
    return (
        <Detail onActive = {handleActive}></Detail>
    )
}