export const ValidateEmail = (email) => {
    let re = /^.+@.+.+$/;
      if (re.test(email) && email.length > 5) {
        return true
      } else if ((!re.test(email) && email.length > 0) || (re.test(email) && email.length < 5)){
        return false
      } 
      return true
  }

  export function ValidateName (name) {
    if (name.length >0 && name.length <3) {
      return false;
    } else {
      return true
    }
  }  

  export function ValidateMessage (message) {
    if (message.length >0 && message.length <10) {
      return false;
    } else {
      return true
    }
  }  