import { useState ,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function ArticleList()  {
    const [articles, setArticles] = useState([]);

    const API_URL = "http://localhost:3000/api/v1/articles"

    function getAPIData() {
        return axios.get(API_URL).then((response) => response.data)
    }
   

    useEffect(() => {
       getAPIData().then((items) => {
           return items.length !== articles.length ? setArticles(items) : "" 
       });
    },[articles])
    

    const articlesArray = articles.map(article => {
        
        return(
            <div key={article.id}>
                <h2>
                    <Link 
                        to={`/articles/${article.id}`}
                    >
                        {article.title}
                    </Link>
                </h2>
                <p>{article.content}</p>
                <hr/>
            </div>
        )
    })

    return (
        <div>
            {articlesArray}
            <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link>
        </div>        
    )
} 