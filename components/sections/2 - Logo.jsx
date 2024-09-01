import React from 'react'
import { Button } from '../ui/button'
import Header from '../ui/1 - header'
import { ChevronRight, UserRoundPlus } from 'lucide-react'
import Link from 'next/link'
import { Card } from '../ui/card'

export default function Logos() {
  return (
    <div className="min-h-screen relative">
      <div className="color-bg h-full w-11/12 left-0 right-0 mx-auto absolute z-[0] blur-[64px] opacity-10 top-48"></div>
      <div className="mx-auto relative">
      

        <div class="mx-auto absolute h-full flex justify-between z-[-1]">
          <div class="w-screen h-[1px] bg-neutral-200"></div>
        </div>

        <div className="mx-auto w-full h-screen bg-neutral-50/20 backdrop-blur-md border-x border-b border-neutral-200 rounded-md">
        </div>

        
      </div>
    </div>
  )
}