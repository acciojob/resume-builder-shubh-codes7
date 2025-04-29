
import React from "react";
import './../styles/App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Header.js'
import Page1 from './Page1.js'
import Page2 from './Page2.js'
import Page3 from './Page3.js'
import Page4 from './Page4.js'
import Page5 from './Page5.js'
import Resume from './Resume.js'

const App = () => {

  const [profile, setProfile] = React.useState({})
  const [courses, setCourses] = React.useState([{college: "p1", completionYear: "p1", courseName: "p1", percentage: 90}, {college: "p1", completionYear: "p1", courseName: "p1", percentage: 90}]);
  const [skills, setSkills] = React.useState(['s1', 's2'])
  const [projects, setProjects] = React.useState([{projectName: "p1", techStack: "p1", description: "p1"}, {projectName: "p2", techStack: "p2", description: "p2"}])
  const [socials, setSocials] = React.useState(['l1', 'l2'])


  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Page1 setProfile={setProfile} />} />
        <Route path="/education" element={<Page2 courses={courses} setCourses={setCourses}/>} />
        <Route path="/skills" element={<Page3 skills={skills} setSkills={setSkills}/>} />
        <Route path="/project" element={<Page4 projects={projects} setProjects={setProjects} />} />
        <Route path="/social" element={<Page5 socials={socials} setSocials={setSocials} />} />
        <Route path="/resume" element={<Resume profile={profile} courses={courses} skills={skills} projects={projects} socials={socials} />} />
      </Routes>
    </div>
  )
}

export default App
