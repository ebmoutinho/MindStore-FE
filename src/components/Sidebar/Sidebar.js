import React from 'react'
import "./sidebar.css"
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter';

function Sidebar(props) {
  const { handleSortEvent } = props;

  return (
    <div className='sidebar'>
      <Sort handleSortEvent={handleSortEvent} />
      <Filter />
    </div>
  )
}

export default Sidebar;