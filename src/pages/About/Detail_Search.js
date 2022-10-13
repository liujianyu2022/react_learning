import React from "react"
import {useSearchParams} from "react-router-dom"

function Detail_Search(){
    const [search, setSearch] = useSearchParams()
    
    let id = search.get("id")                   //需要调用get方法获取
    let context = search.get("context")

    return (
        <div>
            <span>id: {id}    context: {context}</span>
        </div>
    )
}

export default Detail_Search