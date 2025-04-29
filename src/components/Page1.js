import React from 'react'
import NavButtons from './NavButtons.js'

export default function Page1({profile, setProfile}){

    function handleChange(e){
        const {name, value} = e.target
        setProfile(prev => ({...prev, [name]: value}))

    }


    return(
        <>
            <h2 >Add your profile details</h2>
            <form>
                <input onChange={handleChange} type="text" placeholder="First Name" name="fname"/>
                <input onChange={handleChange} type="text" placeholder="Last Name" name="lname"/>
                <input onChange={handleChange} type="number" placeholder="Phone Number" name="phone"/>
                <input onChange={handleChange} type="text" placeholder="Address" name="address"/>
                <div>
                    <label>Profile image</label>
                    <input onChange={(e) => setProfile((prev) => ({...prev, url:e.target.value}))} type="file" name="url"/>
                </div>
            </form>
            <NavButtons page={0}/>
        </>
    )
}