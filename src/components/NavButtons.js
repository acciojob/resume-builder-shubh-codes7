
import React from 'react'
import '../styles/App.css'
import {useNavigate} from 'react-router-dom'

export default function NavButtons({page}){

    const pages = ['profile', 'education', 'skills', 'project', 'social', 'resume']

    const navigate = useNavigate()

    function handleBack(){
        console.log("Back")
        navigate(`/${pages[page-1]}`)
    }

    function handleNext(){
        console.log("Next")
        if(page===4){
            alert("no next page")
            return
        }
        navigate(`/${pages[page+1]}`)

    }
    
    function handleSave(){
        console.log("Save")
        navigate(`/${pages[page+1]}`)
    }

    return(
        <div className="navButtons">
            <button id="back" disabled={page === 0} onClick={handleBack}>Back</button>
            <button id="next" onClick={handleNext}>Next</button>
            <button id="save_continue" onClick={handleSave}>Save and Continue</button>
        </div>
    )
}