# Live Audio Chat com Gemini e Visualização 3D

Este projeto demonstra uma aplicação web interativa que permite comunicação por voz em tempo real com um modelo de linguagem grande (LLM) do Google Gemini, integrado com uma visualização 3D.

## Funcionalidades

-   **Interação por Voz:** Converse diretamente com o modelo Gemini usando seu microfone.
-   **Geração de Voz:** Receba respostas do modelo em áudio sintetizado.
-   **Visualização 3D:** Uma representação visual dinâmica (presumivelmente um visualizador de áudio ou um ambiente 3D) que responde à interação de áudio.

## Como Funciona

1.  **Captura de Áudio:** O navegador captura o áudio do seu microfone.
2.  **Envio para o Gemini:** O áudio é enviado em tempo real para o modelo `gemini-2.5-flash-preview-native-audio-dialog` via Google GenAI SDK.
3.  **Processamento pelo Modelo:** O modelo Gemini processa sua entrada de áudio e gera uma resposta.
4.  **Síntese de Voz:** A resposta do Gemini é convertida em áudio sintetizado.
5.  **Reprodução de Áudio e Visualização:** O áudio sintetizado é reproduzido e, simultaneamente, os dados de áudio podem influenciar a visualização 3D na tela.

## Configuração

Para executar este projeto localmente, você precisará de uma chave de API do Google Gemini.

1.  **Obtenha uma Chave de API:** Siga as instruções em [https://ai.google.dev/](https://ai.google.dev/) para obter sua chave de API.
2.  **Variável de Ambiente:** Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API nele:
    ```
    GEMINI_API_KEY=SUA_CHAVE_DE_API_AQUI
    ```
    Certifique-se de substituir `SUA_CHAVE_DE_API_AQUI` pela sua chave real.

## Instalação e Execução

1.  **Instale as Dependências:**
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

2.  **Execute o Projeto:**
    ```bash
    npm run dev
    ```
    ou
    ```bash
    yarn dev
    ```

    Isso iniciará o servidor de desenvolvimento e você poderá acessar a aplicação no seu navegador (geralmente em `http://localhost:5173`).

## Estrutura do Projeto

-   `index.html`: O ponto de entrada HTML da aplicação.
-   `index.tsx`: O componente principal (LitElement) que gerencia a interação de áudio e a comunicação com o Gemini.
-   `visual-3d.ts`: Lógica para a visualização 3D.
-   `utils.ts`: Funções utilitárias, provavelmente para processamento de áudio.
-   `package.json`: Define as dependências e scripts do projeto (Vite, Lit, Three.js, @google/genai).
-   `vite.config.ts`: Configuração do Vite.

Este projeto serve como um exemplo de como construir aplicações interativas de voz com IA generativa e gráficos 3D na web.
