import Button from '../common/button/Button.js';
import Checkbox from '../common/checkbox/Checkbox.js';
import InputText from '../common/inputText/InputText.js';

function Form() {
  return (
    <>
      <form>
        <InputText
          value={''}
          placeholder={''}
          eventHandler={(v) => {
            console.log('oi', v);
          }}
        />
        <InputText
          value={''}
          placeholder={''}
          eventHandler={() => {
            console.log('oi');
          }}
        />
        <InputText
          value={''}
          placeholder={''}
          eventHandler={() => {
            console.log('oi');
          }}
        />
        <Button
          value={'Submit'}
          eventHandler={() => {
            console.log('oi');
          }}
        />
        <Checkbox
          value={false}
          label={''}
          eventHandler={(e) => {
            console.log('e', e);
          }}
        />
      </form>
    </>
  );
}

export default Form;
