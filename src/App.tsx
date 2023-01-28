import React from 'react'
import Layout from "../src/components/Layout/Index"
import { Route, Routes } from "react-router-dom"
import Home from "../src/Pages/Index"
import SingleLanuches from "../src/Pages/launches/Index"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/launches/:id" element={<SingleLanuches/>} />
      </Routes>
    </Layout>
  );
}

export default App;
