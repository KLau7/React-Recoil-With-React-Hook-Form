import { RecoilRoot } from 'recoil';
import './App.scss';
import Login from './components/Login';
import Form from './components/Form'
import CompletedForm from './components/CompletedForm';
import UserProfile from './components/Profile';

function App() {
  return (
    <RecoilRoot>
      <div id="App">
          <Login/>
          <Form/>
          <CompletedForm/>
          <UserProfile />
      </div>
    </RecoilRoot>
  )
}

export default App;
