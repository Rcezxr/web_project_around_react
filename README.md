# Around the U.S. — React

Aplicação web interativa onde o usuário pode compartilhar fotos de lugares, curtir cartões, editar o próprio perfil e trocar a foto de avatar. Este projeto é a migração do **Around the U.S.**, originalmente feito em JavaScript puro, para **React**, desenvolvido durante o bootcamp de Desenvolvimento Web da TripleTen.

## Funcionalidades

- Carregamento dos dados do perfil e dos cartões a partir de uma API
- Edição de nome e descrição do perfil
- Atualização da foto de avatar por link
- Adição de novos cartões, que aparecem no início da lista
- Curtir e descurtir cartões
- Exclusão de cartões
- Visualização ampliada da imagem ao clicar no cartão
- Validação dos formulários: o botão "Salvar" só é habilitado quando os campos são válidos, com mensagens de erro
- Fechamento dos pop-ups pelo botão X, pela tecla Esc ou clicando fora da janela

## Tecnologias

- **React** (componentes funcionais e Hooks)
- **Vite**
- **JavaScript (ES6+)**
- **CSS** com metodologia **BEM**
- **API REST** com `fetch` e Promises
- **Git e GitHub**

## Conceitos de React aplicados

- **`useState`** para gerenciar o estado dos cartões, do usuário, dos pop-ups e dos formulários
- **`useEffect`** para buscar os dados da API quando o aplicativo é carregado
- **`useContext`** com `CurrentUserContext`, disponibilizando o usuário atual e as funções de atualização para todos os componentes
- **`useRef`** para ler o valor do campo de avatar diretamente do elemento
- **Componentes controlados** nos formulários de perfil e de novo cartão
- **Elevação de estado** (lifting state up): o estado dos cartões e dos pop-ups fica no componente `App` e é repassado por props
- **Renderização declarativa**: após cada resposta da API, apenas o estado é atualizado e a interface se ajusta automaticamente

## Estrutura do projeto

```
src/
├── components/
│   ├── App.jsx
│   ├── Header/
│   ├── Main/
│   │   ├── Main.jsx
│   │   └── components/
│   │       ├── Card/
│   │       └── Popup/
│   │           └── components/
│   │               ├── editProfile/
│   │               ├── editAvatar/
│   │               ├── newCard/
│   │               └── ImagePopup/
│   └── Footer/
├── contexts/
│   └── CurrentUserContext.js
├── utils/
│   └── api.js
├── blocks/
├── images/
├── vendor/
├── index.css
└── main.jsx
```

## Como executar localmente

1. Clone o repositório:

```bash
   git clone https://github.com/SEU_USUARIO/web_project_around_react.git
```

2. Entre na pasta do projeto:

```bash
   cd web_project_around_react
```

3. Instale as dependências:

```bash
   npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
   npm run dev
```

5. Abra no navegador o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Autor

**Ryan Cezar**

- [GitHub](https://github.com/Rcezxr)
