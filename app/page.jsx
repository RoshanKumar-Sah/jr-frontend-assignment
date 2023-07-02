

import axios from "axios";
import Header from "./component/Header"
import Image from "next/image";
import Card from "./component/Card"



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


      <div className="pt-8">
<h2 className="font-semibold text-lg">Albums</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
{
  albums.map((album, idx)=>{
    
  return <Card album={album} key={album.item.id} />
})
}

   

      </div>
    </div>
    </div>
  );
}


