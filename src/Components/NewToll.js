import React, { useState } from 'react'

function NewToll({ tollList }) {



    const a = "Car/Jeep/Van"
    const b = "LCV"
    const c = "Truck/Bus"
    const d = "Heavy vehicle"
    const [login, setlogin] = useState(false)
    const initialValues = {
        tollName: " ",
        fd_a_single: "",
        fd_a_double: "",
        fd_b_single: "",
        fd_b_double: "",
        fd_c_single: "",
        fd_c_double: "",
        fd_d_single: "",
        fd_d_double: ""
    }



    const [item, setitem] = useState(initialValues)
    const openForm = () => {
        setlogin(true)
    }
    const closeForm = () => {
        setlogin(false)

    }
    const submitHandler = (e) => {
        e.preventDefault()
        setlogin(false)
        tollList(item)
        setitem({
            tollName: " ",
            fd_a_single: "",
            fd_a_double: "",
            fd_b_single: "",
            fd_b_double: "",
            fd_c_single: "",
            fd_c_double: "",
            fd_d_single: "",
            fd_d_double: ""
        })
    }

    return (
        <div>


            <button className="newToll-button" onClick={openForm}>Add new Toll</button>

            <div style={login ? { display: 'block' } : { display: 'none' }} id="myForm" className='newTolls'>
                <h2 className='heading' >Toll Management Application</h2>
                <hr />
                <form className="toll_form" onSubmit={submitHandler}>
                    <h2 className='AddNewTollHeading' >Add New Toll <button className='close' onClick={closeForm}>CLOSE</button> </h2>

                    <label htmlFor="tollName" className='tollNameInputLabel' >Toll Name*</label>
                    <input type="text" required className='tollNameInput' name='tollName' value={item.tollName}  placeholder='Enter Toll Name' onChange={(e) => setitem({ ...item, tollName: e.target.value })} />

                    <div>
                        <h2 className='main-label-heading'> <label htmlFor="rate" className='main-label' >Vehicle Tariff Details*</label>
                        </h2>
                        <div className='tariffDetails' >
                            <label htmlFor="#" className='vtype'>Car/Jeep/Van </label>
                            <input type="number" required placeholder='single journey' value={item.fd_a_single} onChange={(e) => setitem({ ...item, fd_a_single: (e.target.value) })} className='i1' />
                            <input type="number" required value={item.fd_a_double} placeholder='return journey' onChange={(e) => setitem({ ...item, fd_a_double: (e.target.value) })} className='i2' />
                        </div>
                        <div className='tariffDetails' >
                            <label htmlFor="#" className='vtype'>LCV </label>
                            <input type="number" required placeholder='single journey' value={item.fd_b_single} onChange={(e) => setitem({ ...item, fd_b_single: (e.target.value) })} className='i1' />
                            <input type="number" required placeholder='return journey' value={item.fd_b_double} onChange={(e) => setitem({ ...item, fd_b_double: (e.target.value) })} className='i2' />
                        </div>
                        <div className='tariffDetails' >
                            <label htmlFor="#" className='vtype'>Truck/Bus </label>
                            <input type="number" required placeholder='single journey' value={item.fd_c_single} onChange={(e) => setitem({ ...item, fd_c_single: (e.target.value) })} className='i1' />
                            <input type="number" required placeholder='return journey' value={item.fd_c_double} onChange={(e) => setitem({ ...item, fd_c_double: (e.target.value) })} className='i2' />
                        </div>
                        <div className='tariffDetails' >
                            <label htmlFor="#" className='vtype'>Heavy vehicle</label>
                            <input type="number" required placeholder='single journey' value={item.fd_d_single} onChange={(e) => setitem({ ...item, fd_d_single: (e.target.value) })} className='i1' />
                            <input type="number" required placeholder='return journey' value={item.fd_d_double} onChange={(e) => setitem({ ...item, fd_d_double: (e.target.value) })} className='i2' />
                        </div>
                    </div>

                    <button type="submit">ADD DATAILS</button>
                </form>
            </div>


        </div>
    )
}

export default NewToll