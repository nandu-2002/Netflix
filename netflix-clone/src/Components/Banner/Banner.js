import React,{ useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants'
import "./Banner.css"
import axios from '../../axios'
import YouTube from 'react-youtube';

function Banner() {
  const [movie,setMovie]=useState();
  const [urlId,setUrlId] =useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
    console.log(responce.data.results[0])
    setMovie(responce.data.results[0])
  })
  },[])

  const handlePlayButtonClick=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((responce)=>{
      console.log(responce.data.results)
      if(responce.data.results.length!==0){
        setUrlId(responce.data.results[0])
        
      }
    })
  }
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }


  return (
    <div 
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner_buttons'>
                <button onClick={()=>handlePlayButtonClick(movie.id)} className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie?movie.overview:""}</h1>
        </div>
        {urlId && (
        <div className='youtube-container'>
          <YouTube videoId={urlId.key} opts={opts} />
        </div>
      )}

      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
