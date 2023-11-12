# Open Law 🇨🇭 👩‍⚖️ 🤖

OpenLaw is an innovative web application designed to offer free, clear, and accessible legal advice for residents across Switzerland.

Featuring a sophisticated chatbot, OpenLaw breaks down language barriers by leveraging a multilingual language model. This makes it an invaluable resource for understanding complex legal matters, tailored to the diverse linguistic landscape of Switzerland.

It features widgets such as **lawyer recommendations** and a **community** page where users can get additional feedback and advice from other users. Our goal is to decentralize legal knowledge for we understand the complexities of the Swiss judicial and legal system.

- Chatbot: This is a simple conversational-ui RAG (retrieval augmented generation) based on the Swiss Code of Obligations. A user can query about specific provisions about the Swiss Code of Obligations, which would then summarize the response into simple language.

- Lawyer Recommendation: For further information and quotations for an initial assessment, the user may then need to consult a lawyer using the "lawyer recommendation" widget. It would then bring the user to a page where one can filter lawyers based on the user geographical location and budget.

- Community Platform: We are also implementing a community platform which connects the user to others facing a similar predicament for community support.

- FAQ's: An FAQ section that provides the most frequent queries from users and its corresponding response.
Legal Protection Insurance Recommendation: Understanding that legal action may be expensive and beyond reach for most, we are implementing a widget that recommends legal protection insurances offered by selected insurance companies.

## ▶️ Setup

There is two different ways to setup this project:

1. Install Ollama & Qdrant locally _(Ollama desktop app is currently is only available for Mac and Linux)_ - Ollama will take advantage of your GPU to run the model
1. Use the [Docker Compose](https://docs.docker.com/compose/) file to run Ollama & Qdrant in containers (just run in a terminal in the project directory) - easier setup, but Ollama will run on CPU

### Option 1: 🐳 Run Docker Compose

1. `docker compose up -d` to pull & run the containers
1. `docker compose exec ollama ollama run mistral` to download & install the mistral model

### Option 2: 🖐🏼 Manual installation

1. 🦙 [Download Ollama](https://ollama.ai/download) and install it locally
2. `ollama run mistral` to download and install the model locally (Requires 4.1GB and 8GB of RAM)
3. Open <http://localhost:11434> to check if _Ollama is running_
4. `docker pull qdrant/qdrant`
5. `docker run -p 6333:6333 qdrant/qdrant`

Both Option 1 and 2 continue with the following setup:


## 👩🏽‍💻 Run the App

1. Copy the file `.env.local.example` in the project and rename it to `.env`. Verify if all environment variables are correct
1. `yarn install` to install the required dependencies
1. `yarn dev` to launch the development server
1. Go to <http://localhost:3000> and try out the app
