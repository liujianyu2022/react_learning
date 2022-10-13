import React from "react"


//函数调用 1 + n 次， 但是count被保存下来了
function StateHook(){
    const [count, setCount] = React.useState(0);           //返回值是一个数组， 第一个元素是state， 第二个元素是更新state的方法, 传入的是初始值
    const [name, setName] = React.useState("TOM");

    function add(){     //加的回调函数 
        // setCount(count + 1)
        setCount(oldVal => oldVal + 1)
    }
    function changeName(){
        // setName("JACK")     
        setName( oldVal => "JACK")
    }

    return (
        <div>
            <h2>当前求和为： {count}</h2>
            <button onClick={add}>点击+1</button>

            <h2>当前名字为： {name}</h2>
            <button onClick={changeName}>点击改名</button>
        </div>
    )
}

export default StateHook