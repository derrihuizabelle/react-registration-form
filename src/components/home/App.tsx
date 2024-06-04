import SwitchInput from '../common/switchInput/SwitchInput.js';
import Form from '../form/Form.js';
import './App.scss';

function App() {
  return (
    <>
      <div className="container-fluid home">
        <header className="container-fluid header">
          <SwitchInput
            eventHandler={(e) => console.log('switch', e)}
            value={true}
            label={''}
          />
        </header>

        <div className="home-form">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
