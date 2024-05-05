/* eslint-disable react/prop-types */

import { 
    FaMale, 
    FaFemale 
} from "./icons";




function Person (props) {
    let ageStep1 = props.age ? props.age : "0";
    let finalAge = Number(ageStep1);
    
    function calcBirthday (age) {
        let year = new Date().getFullYear();
        if (age <= 0) {
            return year;
        }
        else if (age >= 1) {
            let birthday = ( year - age );
            return birthday
        }
        
    }
      
    function genderVar() {
        if (props.gender == "male") {
            return (
                <FaMale />
            );
        } else if (props.gender == "female") {
            return (
                <FaFemale />
            );
        } else {
            return (
                <>
                <FaMale />
                <FaFemale />
                </>
                
            );
        }
    }
    let nationalityFull;
    if (props.nation) {
        nationalityFull = props.nation.charAt(0).toUpperCase() + props.nation.slice(1);
    } else if (!props.nation) {
        return null;
    }
    
    

    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    <b>Name:</b> {
                    props.name ? props.name : "Guest"
                }</div>
                <div>
                    <b>Surname:</b> {props.surname ? props.surname : "Unknown"}
                </div>
                <div><b>Age: </b>
                 {finalAge}
                </div>
                <div>
                    <b>Birthday: </b> {calcBirthday(finalAge)}
                </div>
                <div><b>Gender: </b>
                {genderVar()}
                </div>
                <div>
                    <b>Student: </b>
                    {props.$student ? "Yes" : "No"}
                </div>
                <div>
                <b>Nationality:</b> {props.nation ? nationalityFull : "Unknown"}
                </div>
            </div>
            
        </div>
        
    );
}

export default Person
