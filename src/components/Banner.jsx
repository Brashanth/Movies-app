import React, {useEffect, useState, useTransition} from 'react'
import axios from "axios"

function Banner() {
    const [bannerImage, setBannerIamage] = useState("")
    const [title, setTitle] = useState ("")

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1c013d79a3cf023dcea5e8715f7ea1bc&language=en-US&page=1")
        .then((response) => {
            const firstMovie = response.data.results[0]
            const firstMovieTitle = firstMovie.title
            const firstMoviePoster = firstMovie.backdrop_path
            setBannerIamage(
                `https://image.tmdb.org/t/p/original${firstMoviePoster}`
            )
            setTitle(firstMovieTitle)
        })
    },[])
  return (
    <div className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
        style={
            {backgroundImage: `url(${bannerImage})`}
        }
    >
        <div className="text-white w-full text-center font-bold text-xl p-2 rounded-lg bg-gray-500/75">{title}</div>
    </div>
  )
}

export default Banner
