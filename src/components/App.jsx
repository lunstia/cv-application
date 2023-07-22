import {useState} from 'react';

import Form from './Form.jsx';
import Preview from './Preview.jsx';

function App() {
  const [personalInfo, setPersonalInfo] = useState({name: '', email: '', number: ''});
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);

  return (
    <>
     <Form setPersonalInfo={setPersonalInfo} experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
     <Preview personalInfo={personalInfo} experienceInfo={experienceInfo} educationInfo={educationInfo} />
    </>
  )
}

export default App
