'use client'

export default function Header(){

    function handleSearch(event){
event.preventDefault()
    }



    return(
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 py-4">
        <h2>Music&nbsp;Sansar</h2> 
        <form className="w-full sm:w-fit flex" onSubmit={handleSearch}>
            <input type="text" name="search_term" className="border border-black rounded-sm p-1 outline-none mr-4 w-full" placeholder="Search Album" />
            <button type="submit" className="border border-black bg-white py-1 px-1 rounded-sm">Search</button>
        </form>
        </div>
        
    )
}