import React, {useState} from 'react'

function Tolls({sendTlist}) {
  const [login, setlogin] = useState(false)

//   console.log(sendTlist)

        const openForm = () => {
            setlogin(true)
        }
        const closeForm= () =>{
            setlogin(false)
        }

       

        return (
            <div>
          

                <button  className="tolls-button" onClick={openForm}>See Tolls List</button>

                <div className="toll-list" style={login ? { display: 'block' } : { display: 'none' }} id="tolls" >
                <h2 className='heading' >Toll Management Application</h2>
                <hr />
                <div>
                <h3 className='listHeading'>ALL TOLLS LIST</h3>
                <table className='table'>
                <button className='close' onClick={closeForm}>CLOSE</button>
                <tr>
                <th>Toll Name</th>
                <th>Car/Jeep/Van</th>
                <th>LC Vehicle</th>
                <th>Truck/Bus</th>
                <th>Heavy vehicle</th>
                </tr>
                
                {
                    sendTlist.map((i, index)=>{
                        return (
                            <tr key={index}>
                            <td>{i.tollName}</td>
                            <td>{i.fd_a_single}/{i.fd_a_double}</td>
                            <td>{i.fd_b_single}/{i.fd_b_double}</td>
                            <td>{i.fd_c_single}/{i.fd_c_double}</td>
                            <td>{i.fd_d_single}/{i.fd_d_double}</td>

                            </tr>

                        )
                    })
                }
                
                </table>
                </div>
                    
                </div>
            </div>
        )
    }


export default Tolls