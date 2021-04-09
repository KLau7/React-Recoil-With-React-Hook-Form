import './App.scss';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data, e) => {
    console.log(data, 'data');
    console.log(e, 'e');
  };

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
        <label>Disabled</label>
        <input type='text' name='disabled' disabled />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Email</label>
        <input
          type='text'
          name='Email'
          ref={register({
            required: 'Your input is required',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invaild email format'
            }
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
        <label>Password</label>
        <input
          placeholder='Enter at least 8 characters'
          type='password'
          name='password'
          ref={register({
            required: 'You must specify a password',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters'
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Repeat password</label>
        <input
          name='password_repeat'
          type='password'
          ref={register({
            validate: value => value === password.current || 'The passwords do not match'
          })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
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
        <label className='labelRadio'>
          Yes
          <input
            ref={register({ required: 'Please select radio button' })}
            type='radio'
            value='Yes'
            name='radio'
          />
        </label>

        <label className='labelRadio'>
          No
          <input
            ref={register({ required: 'Please select radio button' })}
            type='radio'
            value='No'
            name='radio'
          />
        </label>

        {errors.radio && <p>{errors.radio.message}</p>}
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

      <div>
        <label className='labelRadio newLine'>
          <input
            type='checkbox'
            name='checkbox'
            value='checkbox1'
            ref={register({ required: 'select at least one' })}
          />
          checkbox1
        </label>

        <label className='labelRadio newLine'>
          <input
            type='checkbox'
            name='checkbox'
            value='checkbox2'
            ref={register({ required: 'select at least one' })}
          />
          checkbox2
        </label>

        <label className='labelRadio newLine'>
          <input
            type='checkbox'
            name='checkbox'
            value='checkbox3'
            ref={register({ required: 'select at least one' })}
          />
          checkbox3
        </label>
        {errors.checkbox && <p>{errors.checkbox.message}</p>}
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
