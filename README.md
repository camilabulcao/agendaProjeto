# agendaProjeto
Projeto utilizando o CRUD (Create, Read, Update e Delete) feito no Node.js

Criar uma API Agenda para reunir contatos do nosso usuário.

### Essa API deve ter as seguintes rotas:

 ☑️"/" Retorna index com apresentação { mensagem: bem vinda a lista de contatinhos }

 ☑️ "/contatos/" Retorna todos os dados do banco de dados

 ☑️ "/contatos/criar" Cria novo contato e retorna mensagem amigável

 ☑️ "/contatos/nome/[NOME]" Retorna contato por nome específico

 ☑️ "/contatos/id/[ID]" Retorna contato por id específico

 ☑️ "/contatos/deletar/[ID]" Deleta contato por id específico e retorna mensagem amigável

 ☑️ "/contatos/atualizar/telefone/[ID]" Atualiza somente telefone do contato por id específico e retorna mensagem amigável

 ☑️ "/contatos/atualizar/[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)

Criar representação visual da sua arquitetura.

![camila](https://user-images.githubusercontent.com/69392233/100795611-13b0dd80-33fe-11eb-939d-5b3f7beea3ed.jpg)

## Dependências: 
* Nodemon
* Cors
* Express
* Mongoose

