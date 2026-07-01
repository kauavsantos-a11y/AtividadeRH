# 🏢 AtividadeRH - Gestão Interna

Sistema Full-Stack para gerenciamento e cadastro de funcionários, desenvolvido com um ecossistema moderno dividindo as responsabilidades entre Front-end e Back-end.

---

## 🚀 Tecnologias Utilizadas

### **Front-end**
* **React.js** (com Vite)
* **CSS3** (Estilização customizada e responsiva)
* **Axios / Fetch API** (Consumo da API)

### **Back-end**
* **Java** * **Spring Boot** (Framework web)
* **Maven** (Gerenciador de dependências)

---

## 📂 Estrutura do Projeto

O repositório está dividido em duas partes principais:

* `AtividadeRH/` - Contém todo o código da interface visual (React/Vite).
* `gestaoInternaBack/` - Contém as APIs, regras de negócio e conexão com o banco de dados (Java/Spring Boot).

---

## 🛠️ Como Executar o Projeto Localmente

### **1. Rodando o Back-end (Java)**
1. Abra a pasta `gestaoInternaBack` na sua IDE de preferência (como o **IntelliJ IDEA**).
2. Aguarde o Maven baixar as dependências do projeto.
3. Certifique-se de que seu banco de dados local esteja ativo.
4. Execute o arquivo principal do Spring Boot (geralmente possui a anotação `@SpringBootApplication`).
> 💡 *Nota: Por padrão, o servidor do Back-end inicializará na porta `8081`.*

### **2. Rodando o Front-end (React)**
Abra o terminal na raiz do projeto e execute os seguintes comandos:

```bash
# Navegar até a pasta do front-end
cd AtividadeRH

# Instalar as dependências do Node
npm install

# Iniciar o servidor de desenvolvimento do Vite
npm run dev
