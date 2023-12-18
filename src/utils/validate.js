export const validateFunc = (email , password) => {

  let ValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

//   Minimum eight characters, at least one letter, one number and one special character:
  let ValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)

  if (!ValidEmail) {
    return 'Invalid Email'
  }
  if (!ValidPassword) {
    return 'Invalid Password'
  }

  return null;
}


