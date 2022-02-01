import { Button, Text } from '@skynexui/components';
import useEscapeListen from '../hooks/useEscapeListen';

export default function ConfirmAlert(props) {
  const { text, ok, cancel, fn, handler } = props;
  useEscapeListen(handler);
  
  return (
    <>
      <Text tag='h2' styleSheet={{fontSize: '24px', wordWrap: 'break-word'}}>
        {text}
      </Text>
      <div style={{ margin: '20px'}}>
        <Button 
          label={ok || 'Ok'} 
          colorVariant='positive'
          onClick={fn}
          styleSheet={{marginRight: '20px', marginBottom: '10px'}}
        />
        <Button 
          label={cancel || 'Cancelar'} 
          colorVariant='negative'
          onClick={handler}
        />
      </div>
    </>
  );
}
