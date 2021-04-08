import './App.scss';
import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        pattern:
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          ref={register({
            required: true,
            min: {
              value: 3,
              message: 'more than 3 charaters'
            },
            pattern: { value: /[A-Za-z]/, message: 'Your input should be english' }
          })}
        />
        {errors.firstName?.type === 'required' && <p>Your input is required</p>}
        {errors.firstName?.message && <p>Your input is required</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          ref={register({
            required: true,
            validate: {
              onlyEng: value => /[A-Za-z]/.test(value)
            }
          })}
        />
        {errors.lastName?.type === 'required' && <p>Your input is required</p>}
        {errors.lastName?.type === 'onlyEng' && <p>Your input should be english</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Email</label>
        <input
          type='text'
          name='Email'
          ref={register({
            required: 'Your input is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invaild email format' }
          })}
        />
        {errors.Email && <p>{errors.Email.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <input
          type='text'
          name='age'
          ref={register({ required: 'Your input is required', valueAsNumber: 'number ar' })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label>Date</label>
        <input
          type='date'
          name='date'
          ref={register({ required: 'Wrong Date format', valueAsDate: false })}
        />
        {errors.date && <p>{errors.date.message}</p>}
      </div>

      <div>
        <label className="labelRadio">
          Yes
        <input ref={register({ required: true })} type="radio" value="Yes" />
        </label>
        
        <label className="labelRadio">
          No
          <input ref={register({ required: true })} type="radio" value="No" />
        </label>
        
      

        {errors.dropdown && <p>{errors.dropdown.message}</p>}
      </div>


      <div>
        <label>Options</label>
        <select name='dropdown' ref={register({ required: 'Please select' })}>
          <option value=''>Please Select</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>

        {errors.dropdown && <p>{errors.dropdown.message}</p>}
      </div>

      <input type='submit' />
    </form>
  );
}

// function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <div className="App">
//       <h1>React Hook Form</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>

//         {/* alphanumeric only */}
//         {/* mandatory */}
//         <input type="text"/>
//         input

//         {/* with placeholder */}
//         {/* disabled */}
//         <input type="text"/>

//         {/* email */}
//         <input type="email" name="" id=""/>

//         {/* number field */}
//         {/* mandatory */}
//         <input type="number"/>

//         <input type="date" name="" id=""/>

//         <select name="" id="">
//           <option value=""></option>
//           <option value=""></option>
//           <option value=""></option>
//           <option value=""></option>
//         </select>

//         <input type="checkbox" name="" id=""/>

//         <input type="radio" name="" id=""/>

//         <input type="password" name="password" id=""/>

//         <input type="password" name="confirm_password" id=""/>

//         <button type="submit">Submit</button>

//       </form>
//     </div>
//   );
// }

export default App;
