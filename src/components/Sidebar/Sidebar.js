import React from 'react'
import "./sidebar.css"
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Sort />
      <Filter />
    </div>
  )
}

export default Sidebar;