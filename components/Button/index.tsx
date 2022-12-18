
import React from 'react'

interface Props {
    label: string
}

function Button({
    label
}: Props) {
  return (
    <button className='font-bold underline px-2 border mx-2'>{label}</button>
  )
}

export default Button