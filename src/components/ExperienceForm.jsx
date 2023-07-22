/* eslint-disable react/prop-types */
import {v4} from 'uuid';

function Form({experience, setExperienceInfo}) {

    function handleChange(id, type, value) {
        setExperienceInfo((prev) => {
            const array = [...prev];
            let change = array.findIndex((temp) => id === temp.id);
            array[change] = {...array[change], [type]: value}
            return array;
        })
    }

    return (
        <form>
            <input type='text' id='cvPosition' placeholder='Position Name' value={experience.position} onChange={(event) => handleChange(experience.id, 'position', event.target.value)}/>
            <input type='text' id='cvCompany' placeholder='Company Name' value={experience.name} onChange={(event) => handleChange(experience.id, 'name', event.target.value)}/>
            <textarea style={{resize: 'none'}} id='cvDescription' placeholder='What were your responsibilities' rows='8' value={experience.description} onChange={(event) => handleChange(experience.id, 'description', event.target.value)}/>
            <div>
                <input type='text' id='cvCompanyStartDate' placeholder='dd/mm/yyyy' value={experience.startDate} onChange={(event) => handleChange(experience.id, 'startDate', event.target.value)}/>
                <input type='text' id='cvCompanyEndDate' placeholder='dd/mm/yyyy or Present'value={experience.endDate} onChange={(event) => handleChange(experience.id, 'endDate', event.target.value)}/>
            </div>
        </form>
    );
}


export default function ExperienceForm({experienceInfo, setExperienceInfo}) {

    function handleClick() {
        setExperienceInfo((prev) => [...prev, {id: v4(),  name: '', position: '', description: '', startDate: '', endDate: ''}])
    }

    

    return (
        <>
            <h2>Experience</h2>
            {experienceInfo.map(experience => {
                return <Form key={experience.id} experience={experience} setExperienceInfo={setExperienceInfo}/>
            })}
            <button onClick={handleClick}>Add Experience</button>
        </>
    );
}