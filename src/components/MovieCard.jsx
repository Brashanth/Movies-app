import React from 'react'
import heart from '../assets/heart.png'
import heartFill from '../assets/heart fill.png'

function MovieCard({ movieObj, addToWatchList, watchList, removeFromWatchList }) {
    console.log("watchlist in movie card", watchList);
    
    const doesContain = (movieObj) => {
      for (let i = 0; i < watchList.length; i++) {
        if (watchList[i].id == movieObj.id) {
          return true;
        }
      }
      return false;
      // const filter = watchList.filter((movie) => movie.id == movieObj.id);
      // return filter.length > 0;
    };
  
    return (
      <div
        className="h-[48vh] w-[180px] bg-cover bg-contain bg-no-repeat rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
        }}
      >
         {doesContain(movieObj) ? (
          <div className="m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-white/50 hover:scale-110 duration-300" 
            onClick={()=>removeFromWatchList(movieObj)}>
            <img className="w-[20px]" src={heartFill} alt="Heart Fill" />
            </div>
        ) : (
          <div
            onClick={() => addToWatchList(movieObj)}
            className="m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-white/50 hover:scale-110 duration-300"
          >
            <img className="w-[20px]" src={heart} alt="Heart" />
          </div>
        )}
        <div className="text-white w-full text-center text-xl p-1 rounded-lg bg-gray-500/75">
          {movieObj.title}
         
        </div>
        
      </div>
    );
  }
  
  export default MovieCard;