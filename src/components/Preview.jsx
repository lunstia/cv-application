/* eslint-disable react/prop-types */
import '../styles/resume.css';


export default function Preview({personalInfo, educationInfo, experienceInfo}) {
    return (
        <div className="preview">
            <section>
                <h1>{personalInfo.name}</h1>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <p>{personalInfo.number}</p>
                    <p>{personalInfo.email}</p>
                </div>
            </section>
            <hr />
            <section>
                <h2>Work Experience</h2>
                {experienceInfo.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <h3>{experience.name}</h3>
                            <h4>{experience.position}</h4>
                            <p style={{whiteSpace: 'pre-wrap'}}>{experience.description}</p>
                            <p>{experience.startDate + ' - ' + experience.endDate}</p>
                        </div>
                    );
                })}
            </section>
            <hr />
            <section>
                <h2>Education</h2>
                {educationInfo.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <h3>{experience.name}</h3>
                            <h4>{experience.study}</h4>
                            <p>{experience.startDate + ' - ' + experience.endDate}</p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}