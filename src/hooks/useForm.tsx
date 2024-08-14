import { useGlobalContext } from '../contexts/GlobalContext';

const useForm = () => {
  const { data, setData } = useGlobalContext();

  const submitForm = (userData: any) => {
    console.log("submit", userData)
    setData({ userData });
};

  return { data, submitForm };
};

export default useForm;
