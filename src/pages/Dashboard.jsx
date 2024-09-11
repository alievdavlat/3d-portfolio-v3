import React from 'react'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
    <Sidebar>
    </Sidebar>
    <Outlet/>
    </>
  )
}

export default Dashboard