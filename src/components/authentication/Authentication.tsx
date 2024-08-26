import { useState } from 'react';
import useForm from '../../hooks/useForm';
import Login from './login/Login';
import SignIn from './signIn/SignIn';

function Authentication() {
  const [isRegister, setIsRegister] = useState(true);
  const { submitForm } = useForm();

  const handleFormType = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      {isRegister ? (<SignIn onHandleFormType={handleFormType}/>) : (<Login onHandleFormType={handleFormType}/>)}
    </>
  );
}

export default Authentication;
