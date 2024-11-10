

function Detail ({content, active}) {
    return (
        <>
            <p>{content}</p>
            <p> 状态：{active ? '显示中':'已隐藏'}</p>
        </>
    )
}

function Article({title, detailData}) {
    return (
        <div>
            <h2>{title}</h2>
            <Detail {...detailData}></Detail>
        </div>
    )
}

export default function DocApp() {
    const articleData = {
        title:'标题1',
        detailData:{
            content:'内容',
            active:true
        }
    }
    return (
        <>
            <Article {...articleData}/>
        </>

    )
}