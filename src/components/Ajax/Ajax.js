import React from "react"
import axios from "axios"

export class Ajax_Class extends React.Component{
    getStudent = ()=>{
        axios.get("http://localhost:5000/api/students").then(
            response => {
                console.log("成功了")
                console.log(response.data)
            },
            error => {
                console.log("失败了")
            }
        )
    }

    render(){
        return (
            <div>
                <button onClick={this.getStudent}>点击获取student——class</button> &nbsp;
         
            </div>
        )
    }
}

export function Ajax_Func(){
    return (
        <div>
            
        </div>
    )
}