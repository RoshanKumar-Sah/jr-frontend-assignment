
import Image from "next/image";
import Link from "next/link";

export default function Card({album}){

    
   return ( 
    
        <div>
        
        <Link href={"/"+album.item.id}>
          <div className="border hover:border-black rounded-md h-full">
            <div className="p-4"><Image src={album.item.cover_art_thumbnail_url} alt="cover_thumbnail" width={200} height={200} className="w-full h-full"/></div>
           <h2 className="px-4 py-1 font-medium text-lg capitalize text-center">{album.item.full_title}</h2> 
            </div>
            </Link>
            </div>
          
        )
      }
   