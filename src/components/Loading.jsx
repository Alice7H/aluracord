import appConfig from '../../config.json';

export default function Loading(props) {
  const user = props.user || '';
 
  return (
    <>
     <div>
       <div className="loader"></div>
       <p>Carregando...</p>
     </div>

     <style jsx>{`
        div { 
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          margin-left: 10px;
          font-size: 18px;
          color: ${appConfig.theme.colors.primary[900]};
        }
        .loader:before,
        .loader:after,
        .loader {
          align-self: center;
          background-image: ${user ? `url(https://github.com/${user}.png)`: `url(${appConfig.backgrounds[0]})`};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border: 10px solid ${appConfig.theme.colors.neutrals[500]};
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-bottom: 10px;
          animation: blink 1s linear infinite;
        }
     
        @keyframes blink {
          0% { border-top: 10px solid ${appConfig.theme.colors.primary[900]};}
          34% { border-right: 10px solid ${appConfig.theme.colors.primary[900]};}
          67% { border-bottom: 10px solid ${appConfig.theme.colors.primary[900]};}
          100% {border-left: 10px solid ${appConfig.theme.colors.primary[900]};}
        }
      `} </style>
    </>
  );
}
