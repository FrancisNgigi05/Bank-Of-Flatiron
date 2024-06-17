import React from 'react'

function Filter({ filterText, setFilterText }) {
  return (
    <div>
     <input type="text" name='search' placeholder='Search ...' value={filterText} onChange={(e) => setFilterText(e.target.value)}/> 
    </div>
  )
}

export default Filter
