import React from "react";
import {Routes, Route} from "react-router-dom"

import HomePage from './HomePage'
import ArticleList from './ArticleList'
import ArticleAdd from './ArticleAdd'
import ArticleInfo from './ArticleInfo'
import ArticleEdit from './ArticleEdit'

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={ <HomePage />  } />
            <Route path="/articles" element={ <ArticleList /> } />
            <Route id={"/:id"} path="/articles/:id" element={ <ArticleInfo /> } />
            <Route path="/articles/new" element={ <ArticleAdd /> } />
            <Route path="/articles/:id/edit" element={ <ArticleEdit /> } />
        </Routes>
    )  
}