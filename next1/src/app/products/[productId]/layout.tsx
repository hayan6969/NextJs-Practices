"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProductDetailsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname=usePathname();
const links=[
    {
        href:"/products/Home/reviews",
        title:"Home"
    }
    ,
    {
        href:"/products/Blog/reviews",
        title:"Blog"
    },
    {
        href:"/products/Products/reviews",
        title:"Products"
    },
    {
        href:"/products/Login/reviews",
        title:"Login"
    }
]
console.log("reload");
const [input,setInput]=useState('');
    return(
        <>
        <header className="w-full flex flex-col justify-between items-center text-center" style={{backgroundColor:'lightblue',padding:'1rem'}}>
          <p className="mb-4">Header</p>
          <div className="flex w-full justify-evenly">
<div>
<input className='text-black' value={input} onChange={(e)=>setInput(e.target.value)}/>

</div>
            {links.map((link,index)=>{
                const isActive=pathname.startsWith(link.href);
                return(
                    <Link className={isActive? '   p-2 text-red-600  bg-black rounded-md ': 'p-2  bg-black rounded-md'} href={link.href} key={index}>
                        {link.title}
                    </Link>
                )
            })}
          </div>
        </header>
        {children}
        <h2>Featured products</h2>
        <p>carousel here</p>
        </>
    )
  }