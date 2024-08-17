import { useState } from 'react';
import Button from '../common/button/Button';
import Checkbox from '../common/checkbox/Checkbox';
import InputText from '../common/inputText/InputText';
import useForm from '../../hooks/useForm';

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(null);

  const { submitForm } = useForm();

  return (
    <>
      <form>
        <h2>Create an Account</h2>
        <h5>Be part of an amazing thing by creating an account</h5>
        <InputText
          value={username}
          label={'Your name'}
          placeholder={''}
          onChange={(v) => {
            setUsername(v);
          }}
        />
        <InputText
          value={''}
          label={'Email'}
          placeholder={''}
          onChange={(v) => {
            setEmail(v);
          }}
        />
        <InputText
          value={''}
          label={'Password'}
          placeholder={''}
          type='password'
          onChange={(v) => {
            setPassword(v);
          }}
        />
        <Checkbox
          value={false}
          label={'I consent with the agreements terms'}
          onCheck={(e) => {
            setTerms(e);
          }}
        />
        <Button
          value={'Create Account'}
          onClick={() => {
            submitForm({username, email, password, terms});
          }}
        />

        <Button
          value={'Login'}
          style={'btn-outline-info'}
          onClick={() => {
            submitForm({username, email, password, terms});
          }}
          
        />
      </form>
    </>
  );
}

export default SignIn;
