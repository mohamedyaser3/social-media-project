import { Skeleton } from '@heroui/react'
import React from 'react'

export default function IsLoding() {
  return <>
   <div className="max-w-[300px] h-70 w-full flex items-center mx-auto my-5 gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  </>
}
