import React from 'react'
import NavButtons from './NavButtons.js'
import '../styles/App.css'

export default function Page5({socials, setSocials}){

    const [social, setSocial] = React.useState('')

    function handleSubmit(e){
        setSocials(prev => [...prev, social])
        setSocial('')
    }

    return(
        <>
            <h2>Add social links like linkedin, github, etc</h2>
            <form>
                <input onChange={(e)=>setSocial(e.target.value)} value={social} type="url" placeholder="Social Links*" name="social"/>
            </form>
            <div className="navButtons">
                <button id="delete_social">DELETE</button>
                <button onClick={handleSubmit} id="add_social">ADD SOCIAL</button>
            </div>

            <h3>Added Courses:</h3>
            <ul>
                {
                    socials.length > 0 && socials.map(social => <li>{social}</li>)
                }
            </ul>


            <NavButtons page={4}/>
        </>
    )
}