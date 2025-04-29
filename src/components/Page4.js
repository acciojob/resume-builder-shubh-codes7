import React from 'react'
import NavButtons from './NavButtons.js'


export default function Page4({projects, setProjects}){

    const [name, setName] = React.useState('')
    const [stack, setStack] = React.useState('')
    const [desc, setDesc] = React.useState('')


    

    function handleSubmit(){
        const newProject = {
            projectName: name,
            techStack: stack,
            description: desc,
        }
        setProjects((prev) => ([...prev, newProject]))
        
        setName('');
        setStack('');
        setDesc('');
    }

    return(
        <>
            <h2 >Add your Mini Project</h2>
            <form>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Project Name*" name="projectName"/>
                <input onChange={(e) => setStack(e.target.value)} value={stack} type="text" placeholder="Tech Stack" name="techStack"/>
                <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" placeholder="Description" name="description"/>
            </form>
            <div className="navButtons">
                <button id="delete">DELETE</button>
                <button onClick={handleSubmit} id="add_project">ADD PROJECT</button>
            </div>
            <NavButtons page={3}/>
        </>
    )
}