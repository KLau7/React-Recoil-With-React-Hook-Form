import { RecoilRoot } from 'recoil';
import './App.scss';
import Login from './components/Login';
import Form from './components/Form'
import CompletedForm from './components/CompletedForm';
import UserProfile from './components/Profile';
import ContextShowcase from './components/ContextShowcase/contextShowcase';

function App() {
  return (
    <RecoilRoot>
      <div id="App">
          <Login/>
          <Form/>
          <CompletedForm/>
          <UserProfile />
          <ContextShowcase />
      </div>
    </RecoilRoot>
  )
}

export default App;
