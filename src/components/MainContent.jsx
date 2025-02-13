import React from 'react'

const MainContent = (props) => {
  const {data} = props;
  return (
    <div className="imgcont">
    <img className='bgImage' src={data?data.hdurl:""} alt="image"/>
    </div>
  )
}

export default MainContent