import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import Header from "../component/Header"
import { notFound } from "next/navigation"

async function getAlbumDetails(slug){

   

    // console.log(slug);
  try{
    let res = await axios.get(`https://genius-song-lyrics1.p.rapidapi.com/album/details/?id=${slug}`,{
        headers:{
          'X-RapidAPI-Key': 'ceda6f6456msh51b9ad68ea4c05bp19a73ejsn08b383ee879e',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
       })
       return res.data.album
  }catch(err){
    return undefined
  }
   
   }



export default async function AlbumDetails({params}){

    let album = await getAlbumDetails(params.slug)
    
if(!album){
    notFound()
}
    return(<>
        


        <div className="container">

        <Header />
        <h2 className="font-medium text-lg py-8">Album Details</h2>
            <div className=" h-52 sm:h-96 w-full relative"> 
            <Image src={album.header_image_url} height={200} width={200} className="w-full h-full object-cover  border rounded-md" />
            

            <div className="absolute -bottom-10 left-4 h-24 w-24 sm:h-52 sm:w-52">
            <Image src={album.cover_art_thumbnail_url} height={200} width={200} className="w-full h-full object-cover border rounded-md" />
            </div>            
            </div>
            <div className="ml-32 sm:ml-60 my-1 sm:my-4 "><Link href={album.url}><h2 className=" font-medium text-lg capitalize hover:text-slate-500">{album.name_with_artist}</h2></Link></div>
            <div className="w-full"><h3 className="text-right">Release Date: {album.release_date}</h3>
            <div> <h3 className="font-medium py-4">Description: </h3> {album.description_preview}</div>
            </div>
        </div>
        </>
    )
}