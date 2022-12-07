import React, { useState, useRef } from 'react'

function Add({ pickItem, sendTolls }) {
    const firstTariff = useRef(null)
    const radio = useRef(null)

    const [login, setlogin] = useState(false)

    const initialValues = { type: "", number: "", time: null, tollName: "", tariff: null, jType: null }
    const [item, setitem] = useState(initialValues)
    const openForm = () => {
        let x = new Date()
        let time = `${x.getDate()}.${x.getMonth()}.${x.getFullYear()} / ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()} `
        setitem({ ...item, time: time })
        setlogin(true)
    }
    const closeForm = () => {

        setlogin(false)
    }


    const submitHandler = (e) => {
        const x = firstTariff.current.innerText
        console.log("first ", x)
        e.preventDefault();
        pickItem({ ...item, tariff: x })
        console.log(radio.current)
        setitem({ type: "", number: "", time: null, tollName: "", jType: null })
        document.getElementById('rb1').checked = false;
        document.getElementById('rb2').checked = false;
        setlogin(false)
    }
    return (
        <div>


            <button className="add-button" onClick={openForm}>Add vehicle entry</button>

            <div className="add.main" style={login ? { display: 'block' } : { display: 'none' }} id="myForm">
                <h2 className='heading' >Toll Management Application</h2>
                <hr />
                <form className="form-container" onSubmit={submitHandler}>
                <div className="form">
                <h2 className='AddVheading'>Add Vehicle <button className='close' onClick={closeForm}>CLOSE</button> </h2>
                    <div className="tollname">
                        <label htmlFor="toll">Select the toll Name</label>
                        <span>
                            <select required name="toll" id="x" value={item.tollName} onChange={(e) => setitem({ ...item, tollName: e.target.value })} >
                                <option value="">select the Toll Name </option>
                                {
                                    sendTolls.map((i) => {
                                        return <option value={i.tollName}>{i.tollName}</option>
                                    })
                                }
                            </select>
                        </span>
                    </div>

                    <div className="tollname">
                        <label htmlFor="type">Vehicle type</label>
                        <span>
                            <select name="type" required value={item.type} onChange={(e) => setitem({ ...item, type: e.target.value })} >
                                <option value="">select vehicle type</option>
                                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle </option>
                            </select>
                        </span>
                    </div>

                    <div className="tollname">
                        <label htmlFor="number">vehicle number</label>
                        <input type="text" className='numberInput' value={item.number}  onChange={(e) => setitem({ ...item, number: e.target.value })} placeholder="vehicle number" name="number" required />
                    </div>

                    <div className='tollname'>
                    <label htmlFor="number">Journey Type</label>
                        <span className='journey'>
                            <span >
                                <input type="radio" name="journey" ref={radio} id="rb1" value="single"  onChange={(e) => setitem({ ...item, jType: e.target.value })} />
                                <label htmlFor="single">single journey</label>
                            </span>
                            <span >
                                <input type="radio" name="journey" ref={radio} id="rb2" value="double" onChange={(e) => setitem({ ...item, jType: e.target.value})} />
                                <label htmlFor="return">return journey</label>
                            </span>
                        </span>
                    </div>
                    <div className="tollname">
                    <h2 className='trf'> TARIFF</h2>  <span className='tariff' ref={firstTariff} >
                        {
                            sendTolls.map((i) => {

                                if (i.tollName == item.tollName && item.jType == "single" && item.type == "Car/Jeep/Van") {
                                    return i.fd_a_single
                                } else
                                    if (i.tollName == item.tollName && item.jType == "double" && item.type == "Car/Jeep/Van") {
                                        return i.fd_a_double
                                    } else
                                        if (i.tollName == item.tollName && item.jType == "single" && item.type == "LCV") {
                                            return i.fd_b_single
                                        } else
                                            if (i.tollName == item.tollName && item.jType == "double" && item.type == "LCV") {
                                                return i.fd_b_double
                                            } else
                                                if (i.tollName == item.tollName && item.jType == "single" && item.type == "Truck/Bus") {
                                                    return i.fd_c_single
                                                } else
                                                    if (i.tollName == item.tollName && item.jType == "double" && item.type == "Truck/Bus") {
                                                        return i.fd_c_double
                                                    } else
                                                        if (i.tollName == item.tollName && item.jType == "single" && item.type == "Heavy vehicle") {
                                                            return <span>{i.fd_d_single} </span>
                                                        } else
                                                            if (i.tollName == item.tollName && item.jType == "double" && item.type == "Heavy vehicle") {
                                                                return i.fd_d_double
                                                            } else {
                                                                return <span>{ } </span>
                                                            }

                            })

                        }

                    </span> 
                    </div>

                    <button type="submit" className="btn">ADD</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Add