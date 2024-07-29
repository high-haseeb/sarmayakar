import React from 'react'
import AnimatedLayout from "@/components/home/AnimatedLayout";
import PearlOnePage from '../../../components/projects/PearlOnePage'

function page() {
  return (
    <AnimatedLayout><div className='w-auto h-auto bg-black'>
      <PearlOnePage/>
    </div></AnimatedLayout>
  )
}

export default page
