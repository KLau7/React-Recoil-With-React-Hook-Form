import { RecoilRoot } from 'recoil';

import './App.scss';

import Form from './components/Form'
import ProgressIndicator from './components/ProgressIndicator';

function App() {

  return (
    <div id="App">
      <RecoilRoot>
        <Form/>
        <ProgressIndicator/>
      </RecoilRoot>
    </div>
  )
}

export default App;
