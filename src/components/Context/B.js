import React from "react"
import {C1, C2} from "./C"

class B extends React.Component{
    
    render(){
        return(
            <div>
                <span>这是B组件</span>
                <C1 />
                <C2 />
            </div>
        )
    }
}

export default B