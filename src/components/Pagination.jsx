import React from 'react'

function Pagination({pageNumber, nextPageFn, prevPageFn}) {
    return (
        <div className="bg-gray-500/75 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
            <div onClick={prevPageFn} className="px-4 hover:scale-150 duration-300 hover:cursor-pointer">
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="px-4">{pageNumber}</div>
            <div onClick={nextPageFn} className="px-4 hover:scale-150 duration-300 hover:cursor-pointer">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    )
}

export default Pagination