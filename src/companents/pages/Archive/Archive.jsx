import React from 'react'
import "./Archive.css"
import ArchiveMain from './ArchiveMain/ArchiveMain'
import ArchiveContent from './ArchiveContent/ArchiveContent'
function Archive() {
  return (
    <div className='Archive container'>
      <ArchiveMain />
      <ArchiveContent/>
    </div>
  )
}

export default Archive