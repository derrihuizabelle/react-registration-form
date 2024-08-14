import SwitchInput from '../common/switchInput/SwitchInput';
import Form from '../form/Form';
import './App.scss';
import useThemeMediaQuery from '../../hooks/useThemeMediaQuery';

function App() {
  const { theme, toggleTheme } = useThemeMediaQuery();
  return (
    <>
      <div className="container-fluid home">
        <header className="container-fluid header">
          <SwitchInput eventHandler={toggleTheme} value={true} label={''} />
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
