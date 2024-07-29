import React from 'react'
import Courtyard from "@/components/projects/Courtyard"
import AnimatedLayout from "@/components/home/AnimatedLayout";

function page() {
  return (
    <AnimatedLayout><div className='w-screen overflow-x-hidden'>
        <Courtyard/>      
    </div></AnimatedLayout>
  )
}

export default page
