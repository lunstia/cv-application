/* eslint-disable react/prop-types */
import {v4} from 'uuid';

function Form({education, setEducationInfo}) {

    function handleChange(id, type, value) {
        setEducationInfo((prev) => {
            const array = [...prev];
            let change = array.findIndex((temp) => id === temp.id);
            array[change] = {...array[change], [type]: value}
            return array;
        })
    }

    return (
        <form>
                
            <input type='text' id='cvSchool' placeholder='School Name' value={education.name} onChange={(event) => handleChange(education.id, 'name', event.target.value)}/>
            <input type='text' id='cvStudy' placeholder='title of study' value={education.study} onChange={(event) => handleChange(education.id, 'study', event.target.value)}/>
            <div>
                <input type='text' id='cvStartDate' placeholder='dd/mm/yyyy' value={education.startDate} onChange={(event) => handleChange(education.id, 'startDate', event.target.value)}/>
                <input type='text' id='cvEndDate' placeholder='dd/mm/yyyy or Present' value={education.endDate} onChange={(event) => handleChange(education.id, 'endDate', event.target.value)}/>
            </div>
        
        </form>
    );
}



export default function EducationForm({educationInfo, setEducationInfo}) {

    function handleClick() {
        setEducationInfo((prev) => [...prev, {id: v4(),  name: '', study: '', startDate: '', endDate: ''}])
    }

    return (
        <>
            <h2>Education</h2>
            {educationInfo.map(education => {
                return <Form key={education.id} education={education} setEducationInfo={setEducationInfo}/>
            })}
            <button onClick={handleClick}>Add Education</button>
        </>
        
    );
}