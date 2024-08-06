"use client"
import courseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,

}


function FeaturedCourses() {
  const featuredCourses=  courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className="py-12 ">

<div>
    <div className="text-center">
<h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">Featured Courses</h2>
<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the Best</p>
    </div>
</div>
<div className="mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

{
    featuredCourses.map((course:Course)=>(
        <div key={course.id} className="flex justify-center">
            <BackgroundGradient  className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"><div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"><p>{course.title}</p>
             <p>{course.description}</p>
             <Link href={`/courses/${course.slug}`}className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800/35 hover:bg-red-800/60" > Learn More</Link>
             </div></BackgroundGradient>
        </div>
    ))
}


    </div>
</div>
<div className="mt-20 text-center" > <Link href={"/courses"}
className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800/35 hover:bg-red-800/60"
>
View All Courses
</Link> </div>

    </div>
  )
}

export default FeaturedCourses