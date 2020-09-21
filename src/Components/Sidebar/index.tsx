import React from 'react'

export const Sidebar: React.FC = () => {
  console.log('chtree--sidebar')
  return (
    <div
      className="chtree--sidebar"
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'gainsboro',
        width: '100%',
        height: '100%'
      }}>
      <p>SideBar</p>
      <button onClick={() => location.reload()}>button</button>
    </div>
  )
}
