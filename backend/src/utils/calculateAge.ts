function calculateAge(dateOfBirth:Date):number{

    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
  
    if (month < dateOfBirth.getMonth() || (month === dateOfBirth.getMonth() && day < dateOfBirth.getDate())) 
      age--;
    
    return age;

}

export default calculateAge;