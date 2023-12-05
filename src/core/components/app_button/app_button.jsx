import React from 'react'

const AppButton = ({children,...props}) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  )
}

export default AppButton