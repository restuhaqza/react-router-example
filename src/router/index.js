import React from 'react'
import { HomePage, AboutPage, OtherPage } from '../pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = ()=>{
    return (
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/other" element={<OtherPage></OtherPage>}></Route>
            </Routes>
    )
}

export default Router