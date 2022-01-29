<!-- screenshot -->

# Aluracord

O projeto Aluracord é um chat que foi criado durante a Imersão React da Alura.

<p align="center">
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#pré-requisitos">Pré-requisitos</a> •
 <a href="#configuração-do-supabase">Configuração do Supabase</a> •
 <a href="#rodando-o-aluracord">Rodando o Aluracord</a>
</p>

## Tecnologias

As seguintes ferramentas/bibliotecas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Next](https://nextjs.org/)
- [Supabase](https://supabase.com)
- [SkynexUI](https://skynexui.dev/)

## Pré-requisitos

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- um editor de código, como o [VSCode](https://code.visualstudio.com/)
- [Supabase] (https://app.supabase.io/)

## Configuração do Supabase

- Entrar com uma conta do GitHub
- Criar um novo projeto
- Criar um arquivo '.env.local' na pasta raiz do projeto com as seguintes informações do supabase: NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY
- Guardar as informações de configuração de chave de API;
- Em settings->Project settings->API->Project API keys->anon/public, copiar a chave e atribuir ao NEXT_PUBLIC_SUPABASE_ANON_KEY do arquivo de ambiente.
- Em settings->Project settings->API->Config->URL, copiar a chave e atribuir ao NEXT_PUBLIC_SUPABASE_URL do arquivo de ambiente.
- Criar uma nova tabela com o nome de 'mensagens'
- Adicionar os campos 'id, create_at, de, texto' na tabela.

## Rodando o Aluracord

```bash
# Clone este repositório
$ git clone <https://github.com/Alice7H/aluracord.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd aluracord

# Instale as dependências
$ npm install
#ou
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
#ou
$ yarn dev

# O projeto inciará na porta:3000 - acesse <http://localhost:3000>
```
