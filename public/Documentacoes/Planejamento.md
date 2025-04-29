# Reunião: 28/04/2025

**Conduzente:** Giovani Braz  
**Participantes:** Gabriel Decresci, André Marcussi, Wellington Kaleb  

---

## Tema: Funcionalidades do Sistema

### Tópicos da Reunião
- Documentação
- Como o sistema deve funcionar
- Tarefas

---

## 📚 Documentação

A documentação foi decidida de forma unânime que será realizada por meio de arquivos `.md` (Markdown), permitindo uma formatação clara e organizada. Além disso, é compatível com o `README.md` do GitHub, facilitando a visualização online ou local.

---

## ⚙️ Funcionalidades do Sistema

Foi definido que o sistema terá **três níveis de usuários**:  
- **Administrativo/Gestão**
- **Professores** (podendo ser também **professores gestores**)
- **Alunos**

Além disso, haverá a **Instituição**, entregue com um login do tipo Administrativo/Gestão.

Após a definição dos níveis de usuário, discutiu-se as funcionalidades principais e os trabalhos a serem geridos pelos Professores e Professores Gestores.

---

### 👤 Administrativo/Gestão

Este nível pode realizar o **CRUD (Criar, Ler, Atualizar, Deletar)** das seguintes entidades:

#### Professores
- Criar professores e professores gestores.
- Professores gestores podem visualizar todos os trabalhos de um curso ao qual estejam vinculados.

#### Alunos
- Criar e gerenciar os alunos normalmente.

#### Instituições
- Criar novas instituições (filiais/escolas).
- Gerenciar administradores e visualizar toda a atividade daquela instituição.

#### Perfis
- Um usuário pode ter múltiplos perfis.
  - Exemplo: Um professor pode também ser aluno de um curso.
  - Um administrador pode atuar também como professor.

#### Cursos
- Criar os cursos relacionados a uma instituição.

#### Usuários Administrativos
- Pode criar novos usuários administrativos com permissões específicas.
  - Exemplo: definir se esse novo administrador pode ou não criar novas instituições.

---

### 👨‍🏫 Professores

Os professores podem realizar o **CRUD** dos seguintes itens:

#### Trabalhos
- Podem criar e editar seus próprios trabalhos.
- Caso sejam **professores gestores**, também podem visualizar os trabalhos relacionados ao curso que monitoram.
- Apesar de serem gestores, ainda continuam sendo professores, com permissão para criar e editar seus próprios trabalhos.

#### Alunos
- Podem criar novos alunos e inseri-los em trabalhos sob sua responsabilidade.

---

### 👨‍🎓 Alunos

Os alunos têm permissões mais restritas:

- Podem visualizar os trabalhos dos quais fazem parte.
- Podem adicionar **acompanhamentos** (ex: notas, comentários, anexos) aos trabalhos.

---

### 📄 Trabalhos

- Apenas **professores ou professores gestores** podem criar um novo trabalho.
- É possível:
  - Adicionar **alunos** ao trabalho (desde que estejam matriculados no mesmo curso).
  - Adicionar **professores ajudantes** mediante envio de notificação.

#### Processo de convite para professor ajudante:
1. O professor líder envia uma solicitação ao professor ajudante.
2. O sistema notifica o professor convidado e também envia um e-mail.
3. O professor ajudante acessa:
   - Menu **Notificações** do sistema.
   - Visualiza a notificação específica.
   - Clica em **Aceitar** ou **Recusar**.
4. A decisão é enviada de volta ao professor líder e aos professores gestores daquele curso, tanto como notificação quanto por e-mail.

---

### 🔐 Funcionalidades Gerais

- Login
- Escolha de perfil
- Logout
- Esqueci minha senha
- Alterar senha
- Enviar e-mails
- Notificações

---

## 🛠️ Tarefas para Cada Integrante

Ainda estamos na fase de estudos e planejamento.  
Ficou decidido que cada membro da equipe deverá **cuidar de funções e componentes diferentes**, com o objetivo de:
- Evitar conflitos ao subir arquivos para o GitHub.
- Melhorar a organização do projeto.