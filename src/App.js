import { RecoilRoot } from 'recoil';
import './App.scss';
import Login from './components/Login';
import Form from './components/Form'
import CompletedForm from './components/CompletedForm';

function App() {
  return (
    <RecoilRoot>
      <div id="App">
          <Login/>
          <Form/>
          <CompletedForm/>
      </div>
    </RecoilRoot>
  )
}

export default App;
