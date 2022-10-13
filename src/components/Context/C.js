import React from "react"
import MyContext from "./MyContext"

export class C1 extends React.Component {
    static contextType = MyContext      //需要声明一下，表示接收

    render() {
        console.log(this)
        return (
            <div>
                <span>这是C组件</span>
                <span>name: {this.context.name}, age:{this.context.age}</span>
            </div>
        )
    }
}

//下面是函数式组件的写法
export function C2() {
    return (
        <div>
            <span>这是C组件</span>

            <MyContext.Consumer>
                {
                    value => <span>name: {value.name}, age：{value.age}, say: {value.defaultVal}</span>
                }
            </MyContext.Consumer>
        </div>
    )
}