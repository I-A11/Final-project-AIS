
const taskManager = new TaskManager(0);

const form = document.querySelector("#new-task-form");


const validFormFieldInput = document.querySelector('#form-button');

const formValidateTaskName = document.querySelector('#form-validate-task-name');
const formValidateAssignedTo = document.querySelector('#form-validate-assigned-to');
const formValidateDescription = document.querySelector('#form-validate-description');
const formValidateDueDate = document.querySelector('#form-validate-due-date');
const formValidateStatus = document.querySelector('#form-validate-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nameLength = formValidateTaskName.value.length;
    if (nameLength >= 5) {
        formValidateTaskName.classList.add('is-valid');
        formValidateTaskName.classList.remove('is-invalid');
    } else {
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
    }

    let nameLength1 = formValidateAssignedTo.value.length;
    if (nameLength1 >= 5) {
        formValidateAssignedTo.classList.add('is-valid');
        formValidateAssignedTo.classList.remove('is-invalid');
    } else {
        formValidateAssignedTo.classList.add('is-invalid');
        formValidateAssignedTo.classList.remove('is-valid');
    }

    let nameLength2 = formValidateDescription.value.length;
    if (nameLength2 >= 5) {
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');
    } else {
        formValidateDescription.classList.add('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    }

    //console.log(formValidateAssignedTo.value);

    taskManager.addTask(
        formValidateTaskName.value,
        formValidateDescription.value,
        formValidateAssignedTo.value,
        formValidateDueDate.value,
        formValidateStatus.value
    );

    console.log(formValidateAssignedTo.value);
});

