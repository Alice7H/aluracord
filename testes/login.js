// import { useState } from  'react';
// import appConfig from '../config.json';
// import toast, { Toaster } from 'react-hot-toast';
// import { Box, Button,TextField, Text } from '@skynexui/components';
// import Title from '../src/components/Title';
// import { isEqual, hasMinLength, isEmail } from '../src/utils/validations';
// import { useAuth } from '../src/hooks/useAuth';

// export default function login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const { signUp, messageError } = useAuth();

//   const handleChangeEmail = (event) => {
//     setEmail(event.target.value);
//   }

//   const handleChangePassword = (event) => {
//     setPassword(event.target.value);
//   }

//   const handleChangeConfirmPassword = (event) => {
//     setConfirmPassword(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     const equal = isEqual(password, confirmPassword);
//     const minLength = hasMinLength( 6, password.length);

//     event.preventDefault();
//     if(!isEmail(email)){
//       toast.error('E-mail inválido');
//       return;
//     }
//     if(!minLength) {
//       toast.error('A senha de ter pelo menos 6 caracteres');
//       return;
//     }
//     if(!equal) {
//       toast.error('A senha não coincide com a confirmação');
//       return;
//     }
//     signUp(email, password);
//     user && toast.success('Verifique seu e-mail');
//     messageError && messageError('Falha ao salvar sua conta');
//   }

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />
//       <Box
//         tag="main"
//         styleSheet={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           backgroundColor: appConfig.theme.colors.primary["600"],
//           backgroundImage: `url(${appConfig.backgrounds[2]})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundBlendMode: "multiply",
//           backgroundPosition: "center",
//         }}
//       >
//         <Box
//           tag="section"
//           styleSheet={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: { xs: "column", sm: "row" },
//             width: "100%",
//             maxWidth: "700px",
//             borderRadius: "5px",
//             padding: "32px",
//             margin: "16px",
//             boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
//             backgroundColor: appConfig.theme.colors.neutrals[999],
//           }}
//         >
//           <Box
//             as="form"
//             name="login-form"
//             onSubmit={handleSubmit}
//             styleSheet={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               width: { xs: "100%", sm: "50%" },
//               textAlign: "center",
//               marginBottom: "32px",
//             }}
//           >
//             <Title tag="h2">Login</Title>
//             <Text
//               variant="body3"
//               styleSheet={{
//                 marginBottom: "32px",
//                 color: appConfig.theme.colors.neutrals[300],
//               }}
//             >
//               {appConfig.name}
//             </Text>
//             <TextField
//               name="login-email"
//               label="Informe o seu e-mail"
//               type="email"
//               placeholder="Informe o seu e-mail"
//               value={email}
//               onChange={handleChangeEmail}
//               fullWidth
//               textFieldColors={{
//                 neutral: {
//                   textColor: appConfig.theme.colors.neutrals[200],
//                   mainColor: appConfig.theme.colors.neutrals[900],
//                   mainColorHighlight: appConfig.theme.colors.primary[500],
//                   backgroundColor: appConfig.theme.colors.neutrals[800],
//                 },
//               }}
//             />
//             <TextField
//               name="login-password"
//               label="Informe a sua senha"
//               autoComplete="off"
//               placeholder="Informe a sua senha"
//               type="password"
//               value={password}
//               onChange={handleChangePassword}
//               fullWidth
//               textFieldColors={{
//                 neutral: {
//                   textColor: appConfig.theme.colors.neutrals[200],
//                   mainColor: appConfig.theme.colors.neutrals[900],
//                   mainColorHighlight: appConfig.theme.colors.primary[500],
//                   backgroundColor: appConfig.theme.colors.neutrals[800],
//                 },
//               }}
//             />
//             <TextField
//               id="login-confirm-pass"
//               name="login-confirm-pass"
//               label="Informe a sua senha novamente"
//               autoComplete="off"
//               placeholder="Informe a sua senha novamente"
//               type="password"
//               value={confirmPassword}
//               onChange={handleChangeConfirmPassword}
//               fullWidth
//               textFieldColors={{
//                 neutral: {
//                   textColor: appConfig.theme.colors.neutrals[200],
//                   mainColor: appConfig.theme.colors.neutrals[900],
//                   mainColorHighlight: appConfig.theme.colors.primary[500],
//                   backgroundColor: appConfig.theme.colors.neutrals[800],
//                 },
//               }}
//             />
//             <Button
//               type="submit"
//               label="Inscrever-se"
//               iconName="FaSignInAlt"
//               fullWidth
//               buttonColors={{
//                 contrastColor: appConfig.theme.colors.neutrals["000"],
//                 mainColor: appConfig.theme.colors.primary[900],
//                 mainColorLight: appConfig.theme.colors.primary[400],
//                 mainColorStrong: appConfig.theme.colors.primary[600],
//               }}
//             />
//             <Button
//               type='button'
//               label='Já tenho conta'
//               iconName='FaSignInAlt'
//               href='/'
//               fullWidth
//               buttonColors={{
//                 contrastColor: appConfig.theme.colors.neutrals["000"],
//                 mainColor: appConfig.theme.colors.neutrals[700],
//                 mainColorLight: appConfig.theme.colors.neutrals[400],
//                 mainColorStrong: appConfig.theme.colors.neutrals[600],
//               }}
//               styleSheet={{ marginTop: "40px" }}
//             />
//           </Box>
//         </Box>
//       </Box>
//       <style jsx>
//         {`
//           p {
//             color: ${appConfig.theme.colors.neutrals[200]};
//             line-height: 24px;
//           }
//         `}
//       </style>
//     </>
//   );
// }
