/* eslint-disable react/prop-types */

export default function InformationForm({setPersonalInfo}) {
    return (
        <>
            <h2>Personal Information</h2>
            <form>
                <input type="text" id="cvName" placeholder="FirstName LastName" onChange={(event) => setPersonalInfo((prev)=>{return {...prev, name: event.target.value}})} />
                <input type="tel" id="cvTel" placeholder="123-456-7890" onChange={(event) => setPersonalInfo((prev)=>{return {...prev, number: event.target.value}})}/>
                <input type="email" id="cvEmail" placeholder="example@email.com" onChange={(event) => setPersonalInfo((prev)=>{return {...prev, email: event.target.value}})}/>
            </form>
        </>
        
    );
}