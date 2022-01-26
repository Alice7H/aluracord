import appConfig from '../config.json';
import { Button, TextField } from '@skynexui/components';

export default function Message() {
  return (
    <>
    <section className="messages">
      <div></div>
      <form>
        <label htmlFor="message">Informe a mensagem</label>
        <TextField placeholder="Informe a mensagem" id="message" 
          styleSheet={{ width: '80%'}}/>
        <Button type='submit' label="Enviar" rounded="full" 
         styleSheet={{ marginBottom: '5px'}}
         buttonColors={{
          contrastColor: appConfig.theme.colors.neutrals["000"],
          mainColor: appConfig.theme.colors.primary[900],
          mainColorLight: appConfig.theme.colors.primary[400],
          mainColorStrong: appConfig.theme.colors.primary[600],
        }}
        />
      </form>
    </section>
    <style jsx>
        {`
          section {
            background-color: ${appConfig.theme.colors.neutrals[700]};
            border: 1px solid ${appConfig.theme.colors.neutrals['700']};
            color: ${appConfig.theme.colors.neutrals['050']};
            display: flex;
            flex-direction: column;
            width: 80%;
            height: 100%;
          }
          div { height: 90%;}
          form { 
            display: flex;
            align-items: center;
            justify-content: space-around;
          }

          @media(max-width: 768px) {
            section, form { width: 100%; }     
            form { align-items: center;}
          }
        `}
      </style>
    </>
  );
}
