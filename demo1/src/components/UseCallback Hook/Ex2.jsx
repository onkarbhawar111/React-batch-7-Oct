import React, {memo} from 'react'

const Ex2 = ({f1}) => {
    console.log('comp rendered....')
  return (
    <div>{f1()}</div>
  )
}

export default memo(Ex2)