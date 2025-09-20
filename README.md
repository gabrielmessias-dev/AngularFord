# 🚗 Dashboard de Veículos - Ford

Este projeto foi desenvolvido como parte do programa **FORD <ENTER>**, utilizando **Angular** para o front-end e uma API local para simulação dos dados.  
O sistema permite gerenciar informações de veículos Ford, visualizar dados de vendas, conectividade, atualização de software e detalhes de cada veículo.

---

## 📌 Funcionalidades

- **Login de acesso** com autenticação simples (`admin` / `123456`).
- **Página Home** com mensagem de boas-vindas.
- **Dashboard interativo** com:
  - Seleção de veículo.
  - Informações detalhadas (VIN, Odômetro, Combustível, Status, Latitude e Longitude).
  - Cards com métricas (Total de Vendas, Conectados, Atualizações de Software).
  - Exibição dinâmica da imagem e nome do veículo.
- **Menu lateral (hambúrguer)** para navegação entre páginas.
- **Logout** disponível tanto no menu quanto no dashboard.

---

## 📂 Estrutura de Pastas

O projeto é dividido em duas partes principais:

```
ANGULARFORD-ENTER/
│
├── angular/       # Front-end Angular
│   ├── src/app/
│   │   ├── components/   # Componentes reutilizáveis (boas-vindas, car-table, card, login-form, menu, recuperar-senha)
│   │   ├── guards/       # Guards de rota (login.guard.ts)
│   │   ├── models/       # Modelos de dados (car.ts, user.ts)
│   │   ├── pages/        # Páginas principais (dashboard, home, login)
│   │   └── services/     # Serviços (dashboard.service.ts, login.service.ts)
│   └── ...
│
└── api/           # API fake para simulação de dados
    ├── node_modules/
    ├── public/
    ├── requests/
    └── src/
```

---

## ⚙️ Tecnologias Utilizadas

- **Angular** (Front-end)
- **TypeScript**
- **Bootstrap**
- **Node.js** (API local / mock)
- **RxJS**

---

## 🚀 Como executar o projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/gabrielmessias-dev/ford-dashboard.git
```

### 2️⃣ Instalar dependências

**Frontend (Angular):**
```bash
cd angular
npm install
```

**Backend (API fake):**
```bash
cd api
npm install
```

### 3️⃣ Rodar a aplicação

- **Iniciar o Angular**:
```bash
cd angular
npm start
```

- **Iniciar a API** (em outro terminal):
```bash
cd api
npm start
```

O projeto ficará disponível em:  
👉 Frontend: `http://localhost:4200`  
👉 API: `http://localhost:3000` (ou porta configurada no seu projeto)

> Observação: conforme você mencionou, para abrir o projeto é preciso primeiro `cd angular` e `npm start`; em outro terminal `cd api` e `npm start` para que o frontend busque os dados localmente da API.

---

## 🔑 Credenciais de acesso

- **Usuário:** `admin`  
- **Senha:** `123456`

---

## 🖼️ Demonstração (prints)

🖼️ Demonstração

Tela de Login
<img src="/prints/inicio-dashboard.png" width="600">
Página Home
<img src="/prints/home-padrao.png" width="600">
Dashboard - Mustang
<img src="/prints/dashboard-veiculo.png" width="600">
Dashboard - Ranger
<img src="/prints/dashboard-veic-2.png" width="600">
Menu Lateral
<img src="/prints/menu-hamburguer.png" width="400">

---

## 📜 Licença

Este projeto foi desenvolvido para fins educacionais no programa **FORD <ENTER>**.  
Sinta-se à vontade para explorar e adaptar conforme necessário. 🚀

---

👨‍💻 Desenvolvido por **Gabriel Messias**  
LinkedIn: https://www.linkedin.com/in/gabrielmessias-dev  
GitHub: https://github.com/gabrielmessias-dev

