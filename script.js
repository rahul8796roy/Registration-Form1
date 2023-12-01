const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  resetErrors();

  let hasError = false;

  if (username === '') {
    setError('usernameError', 'Username is required');
    hasError = true;
  }

  if (email === '') {
    setError('emailError', 'Email is required');
    hasError = true;
  } else if (!validateEmail(email)) {
    setError('emailError', 'Invalid email format');
    hasError = true;
  }

  if (password === '') {
    setError('passwordError', 'Password is required');
    hasError = true;
  }

  if (confirmPassword === '') {
    setError('confirmPasswordError', 'Please confirm your password');
    hasError = true;
  } else if (password !== confirmPassword) {
    setError('confirmPasswordError', 'Passwords do not match');
    hasError = true;
  }

  if (!hasError) {
    alert('Registration Successful!');
    form.reset();
  }
}

function setError(id, errorMessage) {
  const errorElement = document.getElementById(id);
  errorElement.innerText = errorMessage;
}

function resetErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(function(errorElement) {
    errorElement.innerText = '';
  });
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
