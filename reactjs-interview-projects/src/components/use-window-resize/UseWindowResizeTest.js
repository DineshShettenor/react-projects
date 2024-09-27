import React from 'react'
import { UseWindowResize } from './useWindowResize'

export const UseWindowResizeTest = () => {
    const windowSize = UseWindowResize();
    const {width, height} = windowSize;
  return (
    <div>
        <h1>UseWindow Resize Custom Hook</h1>
        <p>window width - {width}</p>
        <p>window height - {height}</p>
    </div>
  )
}
