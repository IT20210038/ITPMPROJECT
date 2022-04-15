export default function validateInfo(values){
    let errors={}

    if(!values.EventID){
        errors.EventID = "EventID required"
    }else if(values.EventID.length = 4){
        errors.EventID = "Event ID must have 4 characters"
    }

    if(!values.NumberOfguests){
        errors.NumberOfguests = "required"
    }

    if(!values.EventFee){
        errors.EventFee = "EventFee required"
    }

    return errors;
}