import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const[apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWU3M2RlNmQzNGQzYTVmMTJkNDU5MGI4NzE4YmQ1ZSIsInN1YiI6IjY2NGY1MDE3ZGRjYzlhM2RlZmRkNDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwiW14KVUxDf_4cElMiFZqhXc4JSscawwTLOmSsINpM'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
  }, [])
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' onClick={() => {navigate('/')}} />
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p><span>Released At: </span>{apiData.published_at.slice(0,10)}</p>
        <p><span>Name: </span>{apiData.name}</p>
        <p><span>Type: </span>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player