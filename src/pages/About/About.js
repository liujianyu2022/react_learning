import React from "react"
import { NavLink, Outlet } from "react-router-dom"


function About() {

    return (
        <div>
            <span>About</span>

            <div>
                <NavLink to="sub1">Sub1</NavLink> &nbsp;
                <NavLink to="./sub2">Sub2</NavLink>
            </div>

            <Outlet />      {/* 指定路由组件的展示位置， 类似于vue中的 router-view */}
        </div>
    )
}

export default About