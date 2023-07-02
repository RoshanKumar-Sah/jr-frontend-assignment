'use client'


import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "../component/Header"

import Card from "../component/Card"


export default function SearchResult(){

    const searchParams = useSearchParams()

    let [data, setData] = useState([])
    
  
    let arr =[]
    let albums =[]

    useEffect(()=>{

        console.log(searchParams.toString());

        let search_term = searchParams.toString()
        search_term = search_term.split("=")[1]
        search_term = search_term.replace(/\+/g, ' ');
        console.log(search_term);

        axios.get(`https://genius-song-lyrics1.p.rapidapi.com/search/multi/?q=${search_term}`, {
            headers: {
                'X-RapidAPI-Key': 'ceda6f6456msh51b9ad68ea4c05bp19a73ejsn08b383ee879e',
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        })
            .then(res => {
                console.log(res.data.sections);
                if(res.data.sections){
                    setData(res.data.sections)
                }
                else{
                    setData([])
                }
               

            }).catch(err => {
                console.log(err);
            })


           
             
        


    },[searchParams])

console.log(data);
console.log(data.length);


if(data){
                
    data.forEach(el =>{
     if(el.type == "album"){
         return arr.push(el.hits)
     }
     
    })
 //    console.log(arr);
 }

 if(arr){
    arr[0]?.forEach(hit =>{
        return albums.push(hit.result)
    })
}
console.log(arr);
console.log(albums);


   

    return(
        <div className="container">

<Header />

            <div>Search Results</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {
            albums.map((album, idx)=>{
                let obj = {item:{}}
                obj.item.id = album.id
                obj.item.cover_art_thumbnail_url = album.cover_art_thumbnail_url
                obj.item.full_title = album.full_title
  return <Card album={obj} key={obj.item.id} />
})
        }
        </div>
        </div>
    )
}