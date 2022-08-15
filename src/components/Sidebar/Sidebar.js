import React from 'react'
import "./sidebar.css"
import Sort from '../Sort/Sort';
import Filter from '../Filter/Filter';

function Sidebar(props) {
  const { handleSortFetch } = props;

  return (
    <div className='sidebar'>
      <Sort handleSortFetch={handleSortFetch} />
      <Filter />
    </div>
  )
}

export default Sidebar;