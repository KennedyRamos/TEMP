# Report Fechamento LT

Formulário web para registro de vistorias de fechamento de LT, com envio direto para Google Sheets (dados estruturados) e Google Drive (fotos), sem necessidade de backend próprio ou autenticação.

**Deploy:** [tempreportlt.netlify.app](https://tempreportlt.netlify.app/)

---

## Sobre o projeto

Aplicação construída para simplificar o processo de vistoria de fechamento de LT (identificador de operação), substituindo preenchimento manual por um formulário web responsivo que:

- Coleta data, turno, código LT, status de vistoria e múltiplas fotos
- Envia os dados estruturados para uma planilha do Google Sheets
- Faz upload das fotos para uma pasta organizada no Google Drive
- Grava o link da pasta de fotos na própria linha da planilha, junto aos demais dados

Todo o backend roda como um **Google Apps Script** publicado como Web App — não há servidor dedicado, banco de dados ou autenticação de usuário.

## Stack

| Camada | Tecnologia |
|---|---|
| Front-end | React + Vite |
| Estilização | Tailwind CSS v4 |
| Fonte | JetBrains Mono |
| Backend / integração | Google Apps Script (webhook) |
| Armazenamento estruturado | Google Sheets |
| Armazenamento de arquivos | Google Drive |
| Hospedagem | Netlify |

## Como funciona

```
Usuário preenche o form (React)
        │
        ▼
Fotos convertidas para base64 no client
        │
        ▼
POST (JSON) → Google Apps Script (doPost)
        │
        ├─► Cria/reaproveita pasta no Drive: LT_{lt}_{date}_{shift}
        ├─► Decodifica e salva cada foto na pasta
        ├─► Define permissão de acesso público (link)
        │
        ▼
Escreve uma linha no Google Sheets com todos os campos + link da pasta
        │
        ▼
Resposta JSON de sucesso/erro → React atualiza o status do formulário
```

Uma rotina agendada (trigger diário no Apps Script) remove periodicamente as pastas de vistoria mais antigas que um determinado número de dias, evitando acúmulo de arquivos no Drive — útil especialmente por este projeto estar publicado como portfólio, aberto a testes de terceiros.

## Estrutura do projeto

```
src/
├── assets/                  # Logo e recursos estáticos
├── components/
│   ├── DateField.jsx
│   ├── ShiftField.jsx
│   ├── LtField.jsx
│   ├── InspectedField.jsx
│   ├── PhotoUpload.jsx
│   ├── FormStatusMessage.jsx
│   └── ButtonSubmit.jsx
├── hooks/
│   └── useClosingForm.js    # Toda a lógica de estado e submissão do form
├── utils/
│   └── fileToBase64.js      # Conversão de File para base64
├── form.jsx                 # Composição dos campos do formulário
└── index.css
```

Cada componente de campo é "burro" (recebe `value`/`onChange` via props quando aplicável); toda a lógica de estado, validação e envio vive centralizada em `useClosingForm`.

## Rodando localmente

```bash
git clone <url-do-repositorio>
cd <pasta-do-projeto>
npm install
```

Crie um arquivo `.env` na raiz com a URL do seu próprio deployment do Apps Script:

```
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
```

(veja `.env.example` como referência)

```bash
npm run dev
```

## Convenção de nomes

- **Código (variáveis, IDs, componentes):** em inglês — `date`, `shift`, `lt`, `inspected`, `photos`
- **Planilha (headers das colunas):** em português — `Data`, `Turno`, `LT`, `Vistoria realizada`, `Fotos`

## Git Flow

Este projeto segue Git Flow com commits convencionais em inglês (`feat:`, `fix:`, `style:`, `refactor:`), com branches de feature isoladas mescladas em `develop` antes de chegar em `main`.

## Roadmap

- [ ] Notificações via SeaTalk bot
- [ ] Testes de software
- [ ] Compressão de imagens no client antes do upload

## Licença

Projeto pessoal, disponibilizado como parte de portfólio.
