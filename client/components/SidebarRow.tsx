import React, { SVGProps } from 'react'

interface Props {
    Icon:(props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

const SidebarRow = ({Icon, title}: Props) => {
  return (
    <div className='group flex items-center max-w-fit space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200'>
      <Icon className='h-6 w-6' />
      <p className='group-hover:text-blue-400'>{title}</p>
    </div>
  )
}

export default SidebarRow
