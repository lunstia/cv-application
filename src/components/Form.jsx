/* eslint-disable react/prop-types */

import InformationForm from './InformationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import EducationForm from './EducationForm.jsx';

export default function Form({setPersonalInfo, experienceInfo, setExperienceInfo, educationInfo, setEducationInfo}) {
    return (
        <div>
            <InformationForm setPersonalInfo={setPersonalInfo} />
            <ExperienceForm experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} />
            <EducationForm  educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
        </div>
    );
}