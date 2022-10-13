import React from "react"

function RefHook(){
    console.log(this)           //函数式组件中this为undefined

    let myRef = React.useRef()

    function show(){
        console.log(myRef.current.value)
    }

    return (
        <div>
            <input ref={myRef}></input>
            <button onClick={show}>点击展示</button>
        </div>
    )
}

export default RefHook