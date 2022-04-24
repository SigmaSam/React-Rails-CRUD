import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ArticleAdd() {
    const [state,setState] = useState(
        {
            title:'',
            content:'',
        }
    );
    
    function handleSubmit() {
        axios.post('http://localhost:3000/api/v1/articles/', state);
    }

    function handleChange(e) {
        const {name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }    

   return (
    <div>
        <h1>Create New Article</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title</label>
                <br/>
                <input 
                    type="text"
                    placeholder="The Tittle of your Article" 
                    name="title" 
                    value={state.title} 
                    onChange={handleChange} className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Content</label>
                <br/>
                <textarea
                    placeholder="Some beautiful text you came up with."
                    name="content"
                    rows="5" 
                    value={state.content}
                    onChange={handleChange} className="form-control" 
                />
            </div>
            <div className="btn-group">
                <Link
                    to="/articles"
                    className="btn btn-dark"
                    onClick={handleSubmit}
                >
                    Create
                </Link>
                <Link 
                    to="/articles"  
                    className="btn btn-secondary"
                >
                    Cancel
                </Link>
            </div>                         
        </form>
    </div>
  )
}

