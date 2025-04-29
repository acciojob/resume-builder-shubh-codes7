import React from 'react'
import NavButtons from './NavButtons.js'
import '../styles/App.css'

export default function Resume({profile, socials, courses, skills, projects}){

    console.log(profile)

    return(
        <resume>
            <h2 >Resume</h2>
            <section>
                    <h3>Profile</h3>
                    <h4>Name: {profile.fname} {profile.lname}</h4>
                    <h4>Phone Number: {profile.phone}</h4>
                    <h4>Address: {profile.address}</h4>

            </section>

            <section>
                <h3>Education</h3>
                <div className="cardContainer">
                {
                    courses.length > 0 && courses.map(course => {
                    return(
                        <card>
                            <h4>College: {course.college}</h4>
                            <h4>Graduation Year: {course.completionYear}</h4>
                            <h4>Course: {course.courseName}</h4>
                            <h4>Percentage: {course.percentage}</h4>
                        </card>)
                    })
                }
                </div>
            </section>

            <section>
                <h3>Mini Projects</h3>
                <div className="cardContainer">
                {
                    projects.length > 0 && projects.map(project => {
                        return(
                            <card>
                                <h4>Project Name: {project.projectName}</h4>
                                <h4>Description: {project.description}</h4>
                                <h4>Tech Stack: {project.techStack}</h4>
                            </card>
                        )
                    })
                }
                </div>
            </section> 

            <section>
                <h3>Skills</h3>
                <ul>
                    {
                        skills.length > 0 && skills.map((skill, idx) => <li key={idx}>{skill}</li>)
                    }
                </ul>
            </section>

            <section>
                <h3>Socials</h3>
                <ul>
                    {
                        socials.length > 0 && socials.map((link, idx) => <li key={idx}>{link}</li>)
                    }
                </ul>
            </section>
            
            
        </resume>
    )
}