import throttle from 'lodash.throttle';
let dataForForm = {};
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';
updateOutput();
form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  event.preventDefault();
  dataForForm[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(dataForForm));
}

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    alert('Please fill in all the fields!');
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.clear();
  event.currentTarget.reset();
}

function updateOutput() {
  if (JSON.parse(localStorage.getItem(localStorageKey))) {
    const getedData = JSON.parse(localStorage.getItem(localStorageKey));
    inputEmail.value = getedData.email || '';
    textareaMessage.value = getedData.message || '';
  }
}
