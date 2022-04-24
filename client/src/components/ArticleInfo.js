import React from "react";
import axios from "axios"
import { Link, useParams } from 'react-router-dom';

export default function ArticleInfo() {
    const [state, setState] = React.useState([])
    const { id } = useParams()

    React.useEffect(() =>{ 
        axios.get(`http://localhost:3000/api/v1/articles/${id}.json`)
        .then((response) => {
            setState(response.data)
        })
    },[state])

    function handleDelete() {
        return (
        axios.delete(`http://localhost:3000/api/v1/articles/${id}}.json`)
            .catch(function (error) {
                console.log(error);
            })
        )
    }

    return(
        <div>          
            <h2>{state.title}</h2>
            <p>{state.content}</p>
            <p>
                <Link to={`/articles/${state.id}/edit`} className="btn btn-outline-dark">Edit</Link>
                <Link 
                    to="/articles" 
                    className="btn btn-outline-dark" 
                    onClick={handleDelete}
                >
                    Delete
                </Link>
                <Link 
                    to="/articles" 
                    className="btn btn-outline-dark"
                >
                    Close
                </Link>
            </p>
            <hr/>
        </div>
    )

}