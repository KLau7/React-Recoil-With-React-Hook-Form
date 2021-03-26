import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  
  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* alphanumeric only */}
        {/* mandatory */}
        <input type="text"/>
        input

        {/* with placeholder */}
        {/* disabled */}
        <input type="text"/>

        {/* email */}
        <input type="email" name="" id=""/>

        {/* number field */}
        {/* mandatory */}
        <input type="number"/>

        <input type="date" name="" id=""/>

        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>

        <input type="checkbox" name="" id=""/>

        <input type="radio" name="" id=""/>

        <input type="password" name="password" id=""/>

        <input type="password" name="confirm_password" id=""/>
        


      </form>
    </div>
  );
}

export default App;
