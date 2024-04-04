import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedLayout = () => {
    return (
        <div>
          <div ><Outlet/></div>
        </div>
      )
}

export default ProtectedLayout
