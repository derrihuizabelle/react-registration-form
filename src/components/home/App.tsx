import SwitchInput from '../common/switchInput/SwitchInput';
// import SignIn from '../signIn/SignIn';
import './App.scss';
import useThemeMediaQuery from '../../hooks/useThemeMediaQuery';
import Login from '../login/Login';

function App() {
  const { theme, toggleTheme } = useThemeMediaQuery();
  return (
    <>
      <div className="home-container">
        <header className="home-container__header">
          <SwitchInput eventHandler={toggleTheme} value={true} label={''} />
          <p>{theme}</p>
        </header>
        <div className="home-container__content">
          <div className='home-container__banner'>
            {/* <img src='src\assets\whales.jpg' alt="Description of the image" /> */}
          </div>
          <div className='home-container__form'>
            <Login />
          </div>
        </div>
        <footer className="home-container__footer">
          some info
        </footer>
      </div>
    </>
  );
}

export default App;
