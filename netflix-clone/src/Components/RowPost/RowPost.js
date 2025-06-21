import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import { imageUrl,API_KEY } from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
useEffect(()=>{
  axios.get(props.url).then((responce)=>{
    console.log(responce.data)
    setMovies(responce.data.results)
  }).catch(err=>{
    //alert("Network error")
  })

},[])

const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

const handleMovie=(id)=>{
  console.log(id)
  axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(responce=>{
    console.log(responce.data)
    if(responce.data.results.length!==0){
      setUrlId(responce.data.results[0])
    }else{
      console.log("array empty")
    }
  })
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.poster_path}`} alt="Poster" />
        

          )
        }
        
      </div>
     {urlId && (
        <div>
          <button className='back-button' onClick={()=>setUrlId('')}> ← </button>
          <YouTube videoId={urlId.key} opts={opts} />
        </div>
      )}

    </div>
  )
}

export default RowPost
