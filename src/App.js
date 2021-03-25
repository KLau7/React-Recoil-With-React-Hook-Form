import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  
  return (
    <div className="App">

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
        <input name="example" defaultValue="test" ref={register} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input name="exampleRequired" ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
      
      
    </div>
  );
}

export default App;
