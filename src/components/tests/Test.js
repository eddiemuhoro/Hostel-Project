import React from 'react'
import useSticky from './useSticky';

const Test = () => {
    const { sticky, stickyRef } = useSticky();
  return (
    <div>
        test
    </div>
  )
}

export default Test