import React from 'react'

const SideBar = (props) => {
  const { handleToggleModal, data } = props;
  return (
    <div className='sidebar'>
      <div className="sidebarContent">
        <h1 className='loadText'>{data ? data.title : "Loading..."}</h1>
        <div>
          <p>Description:</p>
          <p className='loadText'>{data ? data.explanation : "Please wait..."}</p>
        </div>
        <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default SideBar