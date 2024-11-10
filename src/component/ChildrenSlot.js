//父组件传递子组件通过属性插槽，并且传递的值不能修改
function ListTest({children, title, footer = <div>默认底部</div>}) {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
            {footer}
        </>
    )
}

export default function ChildrenSlot() {
    return (
        <>
            <ListTest title="列表一"
            footer = {<p>这是底部内容1</p>}>
                <li>内容1</li>
                <li>内容2</li>
                <li>内容3</li>
                <li>内容4</li>
            </ListTest>
            <ListTest title="列表二"
            footer = {<p>这是底部内容2</p>}>
                <li>内容1</li>
                <li>内容2</li>
                <li>内容3</li>
                <li>内容4</li>
            </ListTest>
            <ListTest title="列表三">
                <li>内容1</li>
                <li>内容2</li>
                <li>内容3</li>
                <li>内容4</li>
            </ListTest>
        </>
    )
}