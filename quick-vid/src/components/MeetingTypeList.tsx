'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { useToast } from "@/hooks/use-toast"
import ReactDatePicker from 'react-datepicker'

import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { Textarea } from './ui/textarea'

function MeetingTypeList() {
  const {user} = useUser()
  const client = useStreamVideoClient()
  const [values,setValues]=useState({
    dateTime: new Date(),
    description:'',
    link:''
  })
  const [callDetails,setCallDetails]=useState<Call>()
    const createMeeting = async() => {
        if(!client || !user) return;

        try {

          if(!values.dateTime){
            toast({
              title: "Please select a date and time",
            })
            return
          }

          const id = crypto.randomUUID()
          const call = client.call('default',id)

          if(!call) throw new Error('Failed to create call')
          const startsAt=values.dateTime.toISOString() || new Date(Date.now()).toISOString()
        const description=values.description || 'Instant Meeting'
        await call.getOrCreate({
          data:{
            starts_at:startsAt,
            custom:{
              description
            }
          }
        })
        setCallDetails(call)

        if(!values.description){
          router.push(`/meeting/${id}`)
        }
        toast({
          title: "Meeting Created",
        })
        } catch (error) {
          console.log(error)
          toast({
            title: "Failed to create meeting",
          })
        }
        
    }
    const meetingLink=`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`
    const { toast } = useToast()
    const router = useRouter()
    const [meetingState,setMeetingState]=useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
<HomeCard
img="/icons/add-meeting.svg"
title="New Meeting"
description="Start an instant meeting"
handleClick={() => {setMeetingState('isInstantMeeting')}}
className="bg-orange-400"
/>
<HomeCard
img="/icons/schedule.svg"
title="Schedule Meeting"
description="Plan your meeting"
handleClick={() => setMeetingState('isScheduleMeeting')}
className="bg-blue-1"
/>
<HomeCard
img="/icons/recordings.svg"
title="View Recordings"
description="Check out your recordings"
handleClick={() => {router.push('/recordings')}}
className="bg-purple-400"
/>
<HomeCard
img="/icons/join-meeting.svg"
title="Join Meeting"
description="Via invitation link"
handleClick={() => {setMeetingState('isJoiningMeeting')}}
className="bg-yellow-500"

/>

{!callDetails ? (
  <MeetingModal
  isOpen={meetingState==='isScheduleMeeting'}
  onClose={()=>setMeetingState(undefined)}
  title="Create Meeting"
  handleClick={createMeeting}
  
  >
    <div className='flex flex-col gap-2.5'>
<label className='text-base text-normal leading-[22px] text-blue-100'>
  Add a description
</label>
<Textarea onChange={(e)=>{
  setValues({
    ...values,
    description:e.target.value
  })
}} className='border-none bg-dark-2 focus-visible:ring-0 focus-visible:ring-offset-0'/>
    </div>
    <div className='flex flex-col w-full gap-2.5'>
<label className='text-base text-normal leading-[22px] text-blue-100' >Select Date and Time</label>
<ReactDatePicker
selected={values.dateTime}
onChange={(date)=>{
  setValues({
    ...values,
    dateTime:date!
  })
 
  

}}
showTimeSelect
timeIntervals={15}
timeCaption="Time"
dateFormat="MMMM d, yyyy h:mm aa"
className='w-full rounded bg-dark-2 p-2 focus:outline-none'
/>
    </div>
  </MeetingModal>
)
:
(
  <MeetingModal
isOpen={meetingState==='isScheduleMeeting'}
onClose={()=>setMeetingState(undefined)}
title="Meeting Created"
className="text-center"
handleClick={()=>{
  navigator.clipboard.writeText(meetingLink)
  toast({
    title: "Link Copied",
  })

  
}}
image='/icons/checked.svg'
buttonIcon='/icons/copy.svg'
buttonText='Copy meeting Link'

/>
)

}

<MeetingModal
isOpen={meetingState==='isInstantMeeting'}
onClose={()=>setMeetingState(undefined)}
title="Start an instant meeting"
className="text-center"
buttonText= "Start Meeting"
handleClick={createMeeting}

/>

<MeetingModal
isOpen={meetingState==='isJoiningMeeting'}
onClose={()=>setMeetingState(undefined)}
title="Type the link here"
className="text-center"
buttonText= "Join Meeting"
handleClick={()=>{router.push(values.link)}}

/>
    
    </section>
  )
}

export default MeetingTypeList