import { useState } from 'react';
import Button from '../common/button/Button';
import InputText from '../common/inputText/InputText';
import useForm from '../../hooks/useForm';
import './Login.scss';
import Checkbox from '../common/checkbox/Checkbox';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { submitForm } = useForm();

  return (
    <>
      <form>
        <h1>Welcome</h1>
        <h2>Log in and Start Analyzing</h2>

        <div className='input-group'>
          <InputText
            value={username}
            label={'Username'}
            placeholder={'Enter your username'}
            onChange={(v) => {
              setUsername(v);
            }}
          />
          <InputText
            value={''}
            label={'Password'}
            placeholder={'Enter your password'}
            type='Password'
            onChange={(v) => {
              setPassword(v);
            }}
          />
        </div>
        
        <div className='options-group'>
          <Checkbox
            value={false}
            label={'Remember me'}
            onCheck={(e) => {
              console.log("i remember")
            }}
          />

          <p>Forgot password</p>
        </div>

        <div className='button-group'>
          <Button
            value={'Login'}
            onClick={() => {
              submitForm({username, password});
            }}
          />

          <div className='button-divider'>
            <p></p> <span>Or</span> <p></p>
          </div>

          <div className='button-sso-group'>
            <Button        
              value={'Login With Google'}
              style={'btn-outline-info'}
              onClick={() => {
                submitForm({username, password});
              }}
            />

            <Button        
              value={'Login With Facebook'}
              style={'btn-outline-info'}
              onClick={() => {
                submitForm({username, password});
              }}
            />
          </div>

          
        </div>

        <div className='register-redirection'>
          <p>Don't have an account? <span>Register</span></p>
        </div>
      </form>
    </>
  );
}

export default Login;
