import React from 'react'

function Mainb() {
 let name="saif"
 let students=["saif","ali","ahmed","mohamed"]
  return (
    <>mainb
      <label htmlFor="username"></label>
      <input type="text" name="" id="username" />
      <h3>welcome {name}</h3>
      <button className='btn btn-primary'>buttonsss</button>
      {students.map((student)=><h3 key={student} >{student}</h3>)}
    </>  
  )
}

export default Mainb