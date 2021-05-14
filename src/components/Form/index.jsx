import {useRef} from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { submittedFormState, existingProfiles } from '../../states/atoms';
import {currentPageState, newUserAgeState, newUserAgeDerivedState } from '../../states/atoms';
import './form.scss';

const Form = () => {
    const { 
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors , isValid }
    } = useForm({mode:'onChange', shouldFocusError: true });

    const password = useRef({});
    password.current = watch('password', '');
    const watchAllFields = watch();


    // recoil
    const setCompletedFormState = useSetRecoilState(submittedFormState);

    const [allUserProfiles, setAllUserProfiles] = useRecoilState(existingProfiles)

    const [displayPage, setDisplayPage] = useRecoilState(currentPageState);

    const setBirthDate = useSetRecoilState(newUserAgeState);

    const onAgeChangeHandler = (e) => setBirthDate(e.target.value);

    const userAge = useRecoilValue(newUserAgeDerivedState);


    const onSubmit = (data) => {
      setAllUserProfiles([...allUserProfiles, data]);
      setDisplayPage('completed');
      return setCompletedFormState(data);
    };

    // Context Showcase
    const news = [
      'Sports',
      'Local',
      'Movie'
    ];
    
    return(
    <form onSubmit={handleSubmit(onSubmit)} style={{display : displayPage === 'createAct' ? 'initial': 'none'}}>

      <h1>Create An Account</h1>
      
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value='Anson'
          ref={register({
            required: true,
            min: {
              value: 3,
              message: 'more than 3 charaters'
            },
            pattern: { value: /[A-Za-z]/, message: 'Your input should be english' }
          })}
          onChange={()=>{
            console.log(watchAllFields)
          }}
        />
        {errors.firstName?.type === 'required' && <p className="error-msg">Your input is required</p>}
        {errors.firstName?.message && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value='Ng'
          ref={register({
            required: true,
            validate: {
              onlyEng: value => /[A-Za-z]/.test(value)
            }
          })}
        />
        {errors.lastName?.type === 'required' && <p className="error-msg">Your input is required</p>}
        {errors.lastName?.type === 'onlyEng' && <p className="error-msg">Your input should be english</p>}
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
          value='Anson@Ng.com'
          ref={register({
            required: 'Your input is required',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invaild email format'
            }
          })}
        />
        {errors.Email && <p className="error-msg">{errors.Email.message}</p>}
      </div>

      <div>
        <label>How much money do you have?</label>
        <input
          type='text'
          name='age'
          value='1'
          ref={register({ required: 'Your input is required', valueAsNumber: 'number ar' })}
        />
        {errors.age && <p className="error-msg">{errors.age.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          placeholder='Enter at least 8 characters'
          type='password'
          name='password'
          value='12345678'
          ref={register({
            required: 'You must specify a password',
            validate: {
              minLength: value => value.length >= 8,
              onlyEng: value => /^[a-zA-Z]+$/.test(value)
            }
          })}
        />
        {errors.password?.type == "onlyEng" && <p className="error-msg">Only english</p>}
        {errors.password?.type == "minLength" && <p className="error-msg">Enter at least 8 characters</p>}
      </div>

      <div>
        <label>Repeat password</label>
        <input
          name='password_repeat'
          type='password'
          value='12345678'
          ref={register({
            validate: value => value === password.current || 'The passwords do not match'
          })}
        />
        {errors.password_repeat && <p className="error-msg">{errors.password_repeat.message}</p>}
      </div>

      <div>
        <label>Birth Date</label>
        <input
          type='date'
          name='date'
          ref={register({ required: 'Wrong Date format', valueAsDate: false })}
          // controlled
          onChange={(e)=>onAgeChangeHandler(e)}
        />
        {errors.date && <p className="error-msg">{errors.date.message}</p>}
      </div>

      {/* age derived from date */}
      {userAge && <p>You're {userAge} years old</p>}

      <div className="siteSettingsForm">
        <h2>Site Theme</h2>
        <label className='labelRadio'>
          Light
          <input
            ref={register({ required: 'Please choose a theme' })}
            type='radio'
            value='dark'
            name='radio'
          />
        </label>

        <label className='labelRadio'>
          Dark
          <input
            ref={register({ required: 'Please choose a theme' })}
            type='radio'
            value='light'
            name='radio'
          />
        </label>

        {errors.radio && <p className="error-msg">{errors.radio.message}</p>}

        <label>Team</label>
        <select name='dropdown' ref={register({ required: 'Please choose one' })}>
          <option value=''>Please Select</option>
          <option value='team-a'>Team A</option>
          <option value='team-b'>Team B</option>
        </select>

        {errors.dropdown && <p className="error-msg">{errors.dropdown.message}</p>}

        <label>News</label>
        <div className="checkboxContainer">
          {news.map((item, index) => (
            <label className='labelRadio newLine' key={index}>
              <input
                type='checkbox'
                name='checkbox'
                value={item}
                ref={register()}
              />
              {item}
            </label>
          ))}
        </div>

      </div>

      <input type='submit' />
    </form>
    )
}

export default Form;