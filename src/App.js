import { RecoilRoot } from 'recoil';

import './App.scss';

import Form from './components/Form'
import CompletedForm from './components/CompletedForm';

function App() {

  return (
    <div id="App">
      <RecoilRoot>
        <Form/>
        <CompletedForm/>
      </RecoilRoot>
    </div>
  )
}

export default App;
