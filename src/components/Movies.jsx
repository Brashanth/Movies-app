import React, { useState, useEffect, useContext } from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import axios from 'axios';
import {WatchListContext} from '../context/WatchListContext';
import { useDispatch, useSelector } from 'react-redux';
import paginationSlice from '../redux/paginationSlice';

const paginationAction = paginationSlice.actions;

function Movies() {
    const [movies, setMovies] = useState([])
    // const [watchList, setWatchList] = useState([]);
    // const [pageNo, setPageNo] = useState(1);
    const {watchList, addToWatchList, removeFromWatchList} = useContext(WatchListContext);
    const {pageNo} = useSelector((state)=>state.pagination)
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'))
    //     if(moviesFromLocalStorage){
    //         setWatchList(moviesFromLocalStorage)
    //     }
    // },[])

    // const addToWatchList = (movieObj) => {
    //     const updatedWatchList = [...watchList, movieObj]; // watchList.concat(movieObj)
    //     setWatchList(updatedWatchList);
    //     localStorage.setItem('movies',JSON.stringify(updatedWatchList))
    //   }
    
    //   const removeFromWatchList = (movieObj)=>{
    //     let filteredMovies = watchList.filter((movie)=> {
    //       return movie.id != movieObj.id
    //      }) // return all those movies whose id is not equal to movieObj.id
    //     setWatchList(filteredMovies)
    //     localStorage.setItem('movies',JSON.stringify(filteredMovies))
    //   }
    //   console.log("watchlist",watchList)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1c013d79a3cf023dcea5e8715f7ea1bc&language=en-US&page=${pageNo}`)
        .then((response) => {
            setMovies(response.data.results)
        })
    },[pageNo])

    const handleNext = () => {
        // setPageNo(pageNo + 1)
        dispatch(paginationAction.handleNext());
    }

    const handlePrev = () => {
        // if (pageNo == 1) {
        //     setPageNo(1)
        // } else {
        //     setPageNo(pageNo - 1)
        // }
        dispatch(paginationAction.handlePrev());
    }

    return (
        <div>
            <div className="text-2xl font-bold text-center m-5">
                <h1>Trending Movies</h1>
            </div>
            <div className="flex justify-evenly flex-wrap gap-10">
                {movies.map((movieObj) => {
                    return (
                        <MovieCard movieObj = {movieObj}
                        addToWatchList={addToWatchList}
                        watchList={watchList}
                        removeFromWatchList={removeFromWatchList}
                        />
                    )
                })}
            </div>
            <Pagination
                nextPageFn={handleNext}
                prevPageFn={handlePrev}
                pageNumber={pageNo}
            />
        </div>
    )
}

export default Movies