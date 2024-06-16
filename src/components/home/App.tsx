import { useGlobalContext } from '../../contexts/GlobalContext.js';
import SwitchInput from '../common/switchInput/SwitchInput.js';
import Form from '../form/Form.js';
import './App.scss';

function App() {

  const {theme, toggleTheme} = useGlobalContext();
  return (
    <>
      <div className="container-fluid home">
        <header className="container-fluid header">
          <SwitchInput
            eventHandler={toggleTheme}
            value={true}
            label={''}
          />
          <p>{theme}</p>
        </header>

        <div className="home-form">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
