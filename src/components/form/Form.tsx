import { useState } from 'react';
import Button from '../common/button/Button';
import Checkbox from '../common/checkbox/Checkbox';
import InputText from '../common/inputText/InputText';
import useForm from '../../hooks/useForm';

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(null);

  const { submitForm } = useForm();

  return (
    <>
      <form>
        <InputText
          value={username}
          label={'Username'}
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
          label={'Aceita os termos'}
          onCheck={(e) => {
            setTerms(e);
          }}
        />
        <Button
          value={'Submit'}
          onClick={() => {
            submitForm({username, email, password, terms});
          }}
        />
      </form>
    </>
  );
}

export default Form;
