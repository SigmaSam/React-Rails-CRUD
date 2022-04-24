import {useState,useEffect} from 'react'
import { get, patch } from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function ArticleEdit() {
  const [state, setState] = useState({
    title:'',
    content: '',
  });

  const { id } = useParams();

  useEffect(() =>{ 
    get(`http://localhost:3000/api/v1/articles/${id}.json`)
    .then((response) => {
        setState(response.data)
    })
    .catch(error => console.log('error', error))
  },[])

function handleChange(e) {
  const {name, value } = e.target
  setState(prevState => ({
      ...prevState,
      [name]: value
  }))
}    

function handleSubmit(e) {
  patch(`http://localhost:3000/api/v1/articles/${id}`, state)
}

  return (
    <div>
      <h1>Edit {state.title}</h1>
      <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title</label>
                <br/>
                <input 
                    type="text"
                    placeholder="New Awsome Title" 
                    name="title" 
                    value={state.title} 
                    onChange={handleChange} className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Content</label>
                <br/>
                <textarea
                    placeholder="Sheakspier would be proud."
                    name="content"
                    rows="5" 
                    value={state.content}
                    onChange={handleChange} className="form-control" 
                />
            </div>
            <div className="btn-group">
                <Link
                    to={`/articles/${id}`}
                    className="btn btn-dark"
                    onClick={handleSubmit}
                >
                    Update
                </Link>
                <Link 
                    to={`/articles/${id}`} 
                    className="btn btn-secondary"
                >
                    Cancel
                </Link>
            </div>                         
        </form>
    </div>
  )
}

