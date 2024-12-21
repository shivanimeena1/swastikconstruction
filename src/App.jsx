import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";



function App() {


  return (
  <div className="flex flex-col justify-center items-center bg-[#6b7080] min-h-screen">
    <Outlet/>
  </div>
  )
}

export default App
