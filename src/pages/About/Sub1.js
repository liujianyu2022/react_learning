import { toBeValid } from "@testing-library/jest-dom/dist/matchers"
import React from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"

function Sub1() {
    const [message] = React.useState([
        { id: 0, context: "news1" },
        { id: 1, context: "news2" }
    ])

    let navigate = useNavigate()

    function showDetail_Params(item) {
        navigate(`detail_params/${item.id}/${item.context}`)
    }

    function showDetail_Search(item) {
        navigate(`detail_search?id=${item.id}&context=${item.context}`)
    }

    function showDetail_State(item) {
        navigate("detail_state", {
            replace: false,
            state: {
                id: item.id,
                context: item.context
            }
        })
    }

    function back() {
        navigate(-1)
    }
    function forward() {
        navigate(1)
    }
    return (
        <div>
            <span>AboutSub1</span>
            <ul>
                {
                    message.map(function (item) {
                        return (

                            <li key={item.id}>
                                <Link to="./detail">{item.context}</Link>    {/*  不带参数           */}

                                <Link to={`detail_params/${item.id}/${item.context}`}>{item.context}-params </Link>  &nbsp;      {/*  传递Params参数 */}

                                <Link to={`detail_search?id=${item.id}&context=${item.context}`}>{item.context}-search</Link> &nbsp;   {/*  传递Search参数 */}

                                <Link to="detail_state" state={{ id: item.id, context: item.context }}>{item.context}-state</Link>       {/*  传递State参数 */}

                                <button onClick={() => showDetail_Params(item)}>Detail_Params</button>
                                <button onClick={() => showDetail_Search(item)}>Detail_Search</button>
                                <button onClick={() => showDetail_State(item)}>Detail_State</button>
                            </li>

                        )
                    })
                }
            </ul>

            <button onClick={back}>back</button>
            <button onClick={forward}>forward</button>

           
            <Outlet></Outlet>    {/* 指定具体的路由组件的展示位置 */}
        </div>
    )
}

export default Sub1