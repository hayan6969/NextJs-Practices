'use client'
import { useGetCalls } from '@/hooks/useGetCalls'
import { CallRecording } from '@stream-io/node-sdk'
import { Call } from '@stream-io/video-react-sdk'
import { Heading1 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
type props ={
    type: 'upcoming' | 'ended' | 'recordings'
}

function CallList({type}:props) {
    const router = useRouter()
    
    const {endedCalls,upcomingCalls,callRecordings,isLoading}=useGetCalls()
    const [recordings,setRecordings]=useState<CallRecording>()
    const getCalls=()=>{
        switch(type){
            case 'upcoming':
                return upcomingCalls
            case 'ended':
                return endedCalls
            case 'recordings':
                return callRecordings
            default:
                return []
        }

        
    }

    const getNoCallsMessage=()=>{
        switch(type){
            case 'upcoming':
                return 'No Upcoming Calls'
            case 'ended':
                return 'No Previous Calls'
            case 'recordings':
                return 'No Recordings available'
            default:
                return ''
        }

        
    }
const calls=getCalls()
const noCallsMessage = getNoCallsMessage()
    return (
    <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
        {
            calls && calls.length > 0 ? calls.map((meeting:Call | CallRecording)=>{
                
            }) : ()
}

    </div>
  )
}

export default CallList