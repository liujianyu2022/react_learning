import React from "react"
import root from "../index";

function EffectHook(){
    const [count, setCount] = React.useState(0);

    //这个回调函数相当于两个钩子，首先是componentDidMount    其次是componentDidUpdate
    // [] 表示所有属性都不监测。  不传值的话表示检测所有属性的改变。 [count] 表示在组件挂载和count更新的时候调用
    // 回调函数的返回值函数相当于 componentWillUnmount
    React.useEffect(()=>{           
        console.log("hello")
        let timer = setInterval(()=>{
            setCount(count + 1)
        }, 1000)

        return ()=>{        //相当于componentWillUnmount   
            clearInterval(timer)
        }
    }, [count])     

    function unmount(){
        // ReactDOM.unmountComponentAtNode(document.getElementById("root"))   由于index.js采用了React.createRoot()的方式，因此组件卸载方法改成了 root.unmount()
        root.unmount();
    }

    function add(){
        setCount(count +1)
    }
    return (
        <div>
            <h2>当前求和为： {count}</h2>
            <button onClick={add}>点击+1</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    )
}

export default EffectHook


