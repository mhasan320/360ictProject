import React from 'react'
import Layout from "../src/components/Layout/Index"
import { Route, Routes } from "react-router-dom"
import Home from "../src/Pages/Index"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/user" element={<User/>} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
