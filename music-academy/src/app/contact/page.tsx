"use client";
import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
function page() {
    const onSubmit = (data:object) => {
        fetch("https://formsubmit.co/hayankhanmehsood@gmail.com",{
            method:"POST",
            body:JSON.stringify(data)
        })
    }
    const formRef = useRef<HTMLFormElement>(null)
    const {register,handleSubmit} = useForm();
  return (
    <>
    <div className="h-screen flex justify-center items-center w-screen bg-black">
     
     <div className="flex z-10  w-[400px]  justify-center items-center">

        <form 
        onSubmit={handleSubmit((data)=>{onSubmit(data)})}
       
        className="">
             <Label htmlFor="name">Name</Label>
            <Input  placeholder="Enter your name" className="w-[400px] mt-1 bg-red-950/40 border-white"  {...register("name",{required:true})}  />
<br />
            <Label htmlFor="content">Message</Label>
            <Textarea  placeholder="Enter your Message" className="w-[400px] mt-1 bg-red-950/40 border-white"  {...register("message",{required:true})}  />
<br />
<Button type="submit" className="w-[400px] mt-1 bg-red-950/70 text-white hover:text-black border-white">Submit</Button>

        </form>
       

     </div>
     
    </div>
    <BackgroundBeams />
    </>
  )
}

export default page