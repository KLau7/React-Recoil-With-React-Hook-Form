# React-Hook-Form with Recoil

## React-Hook-Form
One of the key concepts in React Hook Form is to register your uncontrolled component into the hook. This will make its value available for both the form validation and submission.

### Key featues / tools
* useForm.register *
 - for registering all the inputs
 - registering each input ref so that it listens for changes
  - simply add put register on the ref prop for <input ref={register({...options})} >
 - * validate prop * -- allow for customized validation function -- best for some asynchronous actions!

* useForm.handleSubmit *
 - define an onSubmit fucntion wrap it with handleSubmit -- <form onSubmit={handleSubmit(onSubmit)}>

* useForm.errors *
- .name.type -- accessing specific input's error type e.g. required, minLength


asynchronous validation

e.g. username

---
### Requrements
The form needs to fulfill the following requirement:

Text field

Mandatory

Alphanumeric only

Text field With placeholder

Disabled

Email field

Need to be valid Email

Number field

Mandatory

Number only

Date field

Select option list

Checkbox set

Radio set

Password field

Confirm password field

Depend on the Password field