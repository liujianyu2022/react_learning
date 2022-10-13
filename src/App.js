
import StateHook from "./components/StateHook";
import EffectHook from "./components/EffectHook";
import RefHook from "./components/RefHook";

import {A1, A2} from "./components/Context/A"

import {NavLink, Routes, Route, Navigate, useRoutes} from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Sub1 from "./pages/About/Sub1";
import Sub2 from "./pages/About/Sub2";

import Detail_Params from "./pages/About/Detail_Params"
import Detail_Search from "./pages/About/Detail_Search"
import Detail_State from "./pages/About/Detail_State"


import { Ajax_Class } from "./components/Ajax/Ajax";


const App = ()=>{
  const elements = useRoutes([    //路由表的写法
    {
      path:"/about",
      element: <About />,
      children:[
        {
          path:"sub1",
          element: <Sub1 />,
          children:[
            {
              path:"detail_params/:id/:context",    //使用Params参数的时候，需要提前占位
              element: <Detail_Params />
            },
            {
              path:"detail_search",
              element: <Detail_Search />
            },
            {
              path:"detail_state",
              element: <Detail_State />
            }
          ]
        },
        {
          path:"sub2",
          element: <Sub2 />
        }
      ]
    },
    {
      path:"/home",
      element: <Home />
    },
    {
      path:"/",
      element:<Navigate to="/home"/>
    }
  ])
  
  return (
    <div>
      <StateHook></StateHook>
      <EffectHook></EffectHook>
      <RefHook></RefHook>
      <A1></A1>
      <hr></hr>
      <A2></A2>


      {/* 路由链接 */}
      <NavLink to="/home" className={({isActive})=>isActive? "atguigu" : ""}>Home</NavLink>
      <NavLink to="/about" className={({isActive})=>isActive? "atguigu" : ""}>About</NavLink>

      {/* 注册路由 */}
      {/* <Routes>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/" element={<Navigate to="/home" />}> </Route>
      </Routes> */}

      {elements}  

      <hr></hr>
      <Ajax_Class></Ajax_Class>
    </div>
  )
}

export default App;
