import React from 'react'


const Footer = (props) => {
  const {showSideBar,handleToggleModal,data} = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>Astronomy Photo of the Day</h1>
        <h2 className='loadText'>{data?data.title:"Loading..."}</h2>
      </div>
      <button onClick={handleToggleModal}>
        {!showSideBar && <i className="fa-solid fa-circle-info"></i>}
      </button>
    </footer>
  )
}

export default Footer