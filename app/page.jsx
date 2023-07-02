

import { YOUR_API_KEY } from "./const/api";
import axios from "axios";
import Header from "./component/Header"
import Image from "next/image";



async function getData(){

  
  let res = await axios.get(`https://genius-song-lyrics1.p.rapidapi.com/chart/albums/`,{
         headers:{
           'X-RapidAPI-Key': 'ceda6f6456msh51b9ad68ea4c05bp19a73ejsn08b383ee879e',
         'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
         }
        })
        
          return res.data.chart_items
        
       
        

 }

export default async function Home() {

let albums = await getData()



  return (
    <div className="container">
      {/* <h1>Music Sansar</h1>
      <p>Sansar for music lovers</p> */}
      <Header />
{/* 
      {
        JSON.stringify(albums)
        
      } */}

      <div className="pt-8">
<h2 className="font-semibold text-lg">Albums</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
      {
        albums.map((album, idx)=>{
          return <div key = {album.item.id}>
          <div className="border hover:border-black rounded-md">
            <div className="p-4"><Image src={album.item.cover_art_thumbnail_url} alt="cover_thumbnail" width={200} height={200} className="w-full h-full"/></div>
           <h2 className="px-4 py-1 font-medium text-lg capitalize text-center">{album.item.full_title}</h2> 
            </div>
            </div>
          
        })
      }

      </div>
    </div>
    </div>
  );
}


