const form = document.querySelector(".login-form");

const profile = {};

const submitHandler = event => {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  form.reset();
}

form.addEventListener('submit', submitHandler);