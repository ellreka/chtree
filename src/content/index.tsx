import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { Sidebar } from '../Components/Sidebar'
import { ScrollBar } from '../Components/ScrollBar'

const containerBody = document.querySelector('.container_body')
const sidebarContainer = document.createElement('div')
containerBody?.append(sidebarContainer)
sidebarContainer.classList.add('chtree--sidebar-container')
const sidebarContainerStyle = {
  position: 'relative',
  top: '50px',
  left: '0',
  width: '200px',
  height: '100%'
}
Object.assign(sidebarContainer.style, sidebarContainerStyle)

const scrollbarContainer = document.createElement('div')
containerBody?.append(scrollbarContainer)
scrollbarContainer.classList.add('chtree--scrollbar-container')
ReactDOM.render(
  <>
    <Sidebar />
  </>,
  sidebarContainer
)

ReactDOM.render(
  <>
    <ScrollBar />
  </>,
  scrollbarContainer
)
