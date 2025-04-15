export function validateName(name) {
  if (name.length < 8) {
    return 'Name must be at least 8 characters long.';
  }
  return null;
}

export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
  if (!emailRegex.test(email)) {
    return 'Email must be a @stud.noroff.no address.';
  }
  return null;
}

export function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return 'Password must include at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long.';
  }
  return null;
}
