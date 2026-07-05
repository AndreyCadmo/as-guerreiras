<div align="center">
  <h1>⚓ As Guerreiras - Ilha Diana</h1>
  <p><i>Plataforma Web institucional e multipáginas, com cardápio digital dinâmico e sistema inteligente de agendamento via WhatsApp.</i></p>

  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</div>

---

## 📌 Sobre o Projeto

Este projeto consiste em uma plataforma web desenvolvida para o restaurante **Quiosque As Guerreiras**, localizado na histórica Ilha Diana, em Santos/SP. A aplicação foi criada para aproximar os clientes da cultura local e simplificar o acesso às informações de funcionamento, oferecendo uma navegação rápida, fluida e totalmente focada em conversão mobile.

A plataforma resolve dores logísticas reais do estabelecimento, unificando a apresentação de pratos tradicionais com ferramentas automatizadas para que o usuário monte sua solicitação de reserva e a envie diretamente detalhada para o WhatsApp do restaurante.

> 🐟 **Nota de Negócio (Cardápio Exclusivo):** O estabelecimento atua estritamente com culinária caiçara tradicional (peixes e frutos do mar) e opções vegetarianas/veganas. O site destaca de forma transparente a **não-existência** de opções com carne bovina ou suína no local.

---

## ✨ Funcionalidades Chave

* 📅 **Calendário Avançado e Responsivo:** Integração com o `react-day-picker` customizado para bloquear visualmente (cor cinza e clique desativado) segundas e terças-feiras (dias em que o estabelecimento não abre) e datas retroativas.
* 👥 **Validação Inteligente de Lotação:** Controle de fluxo dinâmico que limita reservas convencionais de mesas a no máximo 24 pessoas. Caso o limite seja excedido, o formulário bloqueia o envio e orienta o cliente a solicitar o orçamento de "Fechar grupo".
* ⏱️ **Travamento de Horários Cheios:** Interface limpa que elimina a seleção confusa de minutos e força agendamentos estritamente em horas exatas de funcionamento.
* 📋 **Cardápio sob Consulta:** Substituição de listagens de preços estáticas por sinalizações elegantes de *"Valor no local"*, mantendo o layout limpo e eliminando a necessidade de manutenção constante devido a reajustes sazonais de insumos.
* 📸 **Social Media Feed:** Galeria em grid integrada com mídias reais do perfil oficial do Instagram via URLs de mídia persistentes.

---

## 🚀 Tecnologias e Ferramentas

| Camada | Tecnologia Principal | Bibliotecas Auxiliares |
| :--- | :--- | :--- |
| **Front-End** | React 19 / Next.js 15 (App Router) | Tailwind CSS / Lucide React |
| **Componentes** | TypeScript | React Day Picker / Date-fns |
| **Hospedagem** | Vercel (Edge Network) | — |

---

## 🛠️ Como Executar o Projeto Localmente

Siga o passo a passo abaixo para rodar a aplicação no seu ambiente de desenvolvimento local:

### 1. Clonar o Repositório
```bash
git clone https://github.com/AndreyCadmo/as-guerreiras.git
cd as-guerreiras
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento

```bash
npm run dev
```

Abra o seu navegador e acesse [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) para visualizar a aplicação rodando.


## 📄 Direitos Autorais e Licença

Este é um projeto de software proprietário e comercial. Todos os direitos estão reservados a **Andrey Cadmo**. 

É estritamente proibida a cópia, modificação, distribuição, revenda ou reprodução (total ou parcial) do código-fonte, elementos visuais e identidade deste projeto sem a autorização prévia e expressa por escrito do desenvolvedor.

---
<div align="center">
  <p>Desenvolvido com ⚡ por <a href="https://andreycadmo.dev.br">Andrey Cadmo</a></p>
</div>
