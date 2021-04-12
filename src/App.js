import { RecoilRoot, useRecoilValue } from 'recoil';
import './App.scss';
import Login from './components/Login';
import Form from './components/Form'
import CompletedForm from './components/CompletedForm';

import {currentPageState} from './states/atoms';

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
