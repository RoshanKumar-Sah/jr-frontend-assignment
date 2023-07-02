'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {




    const router = useRouter()

    function handleSearch(event) {

        event.preventDefault()
        if (event.target.search_term.value) {

            router.push('/searchResult?q='+event.target.search_term.value)


        }

    }

   








    return (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 py-4 border-b border-black">
            <h2 className="hover:text-slate-500 text-3xl font-semibold"><Link href={"/"}>Music&nbsp;Sansar</Link></h2>
            <form className="w-full sm:w-fit flex" onSubmit={handleSearch}>
                <input type="text" name="search_term" className="border border-black rounded-sm p-1 outline-none mr-4 w-full" placeholder="Search Album" />
                <button type="submit" className="border border-black bg-white py-1 px-1 rounded-sm">Search</button>
            </form>
        </div>

    )
}