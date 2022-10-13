import React from "react"
import B from "./B"
import MyContext from "./MyContext"     //引入Context对象

export class A1 extends React.Component {
    state = { name: "xiaoming", age: 18 }

    render() {
        let { name, age } = this.state
        return (
            <div>
                <span>这是A组件</span>
                <MyContext.Provider value={{ name, age }}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}


export function A2() {
    const [name] = React.useState("XIAOMING")
    const [age] = React.useState(20)

    return (
        <div>
            <span>这是A组件</span>
            <MyContext.Provider value={{ name, age }}>
                <B />
            </MyContext.Provider>
        </div>
    )
}