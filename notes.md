# Atividades

## 1º Dia

- Iniciar um projeto Next.js;
- Criar components com React usando CSS in JS;
- Ver a estrutura inicial de um projeto Next.js;
- Passaremos propriedades para components;
- Fazer deploy do Aluracord na Vercel.
- Customizar o Aluracord.
- Usar o Coolors (https://coolors.co/1be7ff-6eeb83-e4ff1a-ffb800-ff5714) para gerar a paleta de cores.
- Usar o arquivo de config como base, para fazer o seu tema de cores.

## 2º Dia

- Entender melhor o que é um SPA;
- Conhecer o useState do React;
- Trabalhar com eventos no React: onSubmit, onClick, onChange;
- Fazer deploy do Aluracord na Vercel.
- Praticar mais com o useRouter.
- Validação do campo: Só mostrar a imagem se tiver mais de 2 caracteres no campo de nome de usuário.
- Desafio Master: Pegar outras informações do usuário batendo na API do GitHub.
- Dica: você vai usar a função fetch do JavaScript
- Colocar algo divertido na página 404.js da sua pasta pages!

## 3º Dia

- Entender um pouco mais de como podemos trabalhar com state no React;
- Trabalhar com arrays no state;
- Criar um campo que ao apertamos o "Enter", faz o submit das informações;
- Colocar o botão de OK para enviar a mensagem
- Colocar um botão de apagar mensagem! Dica: use o filter

## 4º Dia

- AJAX e o que é?
- Supabase
- Aba network para debugarmos requests HTTP
- useEffect no React
- Mostrar o loading de mensagens
- Fazer um efeito quando passar o mouse em cima

Criado um ambiente local (.env.local) com:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

## 5º Dia

- Web Sockets (realtime listener)
- E adicionar os stickers
- Configurar o supabase para que a função de escutar o
  banco de dados em tempo real funcione.

Às vezes o useState pode aparecer com o valor inicial e
depois carregar outro valor de um efeito colateral, por isso:
Para reusar um valor de referência (objeto/array), passe uma função para o setState. Ex: setMessages((prev)=> [newMessage, ...prev])

## Novas tarefas:

- Adicionar screenshot no README.md
- Adicionar o favicon
- Adicionar mensagens de erro
- BUG FIXED: Loading não estava aparecendo
- CHANGED: Redirecionamento para uma nova aba ao clicar no nome do usuário da mensagem
- CHANGED AND REMOVED: Os planos de fundo.

- Criar modal para confirmar remoção de mensagens.
- Sair da caixa de confirmação de remoção da mensagem com o ESC
- Sair da caixa de perfil do usuário com o ESC
- Fechar as caixas quando clicar foras delas
- Criar lista de seguidores e de quem sigo
- Escutando o supabase realtime
- FIXED BUG: Os texto no ProfileBox e no ConfirmAlert estão passando das caixas de texto
- O usuário logado pode apagar apenas as suas próprias mensagens
- Criado um balão de conversa na lista de mensagens
- Autenticação com o github configurado no github e no supabase
- Implementado o sign-in e sign-out
- Página inicial modificada para entrar com conta do github
- Adicionado outros stickers

## Futuro:

- Bug: imagem do usuário da lista não exibe o zoom no hover do firefox
- Responsividade e acessibilidade
- Otimizar código
- Fazer upload de imagens (.png, .jpeg, .gif)
- Fazer upload de arquivos (.pdf, zz.txt, .doc, .excel)
