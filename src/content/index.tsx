import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { Sidebar } from '../Components/Sidebar'
import { ScrollBar } from '../Components/ScrollBar'

const containerBody = document.querySelector('.container_body')
const sidebarContainer = document.createElement('div')
containerBody?.append(sidebarContainer)
sidebarContainer.classList.add('chtree--sidebar-container')

ReactDOM.render(
  <>
    <Sidebar />
    <ScrollBar />
  </>,
  document.querySelector('.chtree--sidebar-container')
)
