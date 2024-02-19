import React from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY: string = process.env.REACT_APP_GEN_AI_API_KEY as string;

function App() {
    const genAI = new GoogleGenerativeAI(API_KEY);

    async function run() {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Write a story about a magic backpack."

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
    }

    return (
        <div className="App">
            <button onClick={() => { run(); }}>RUN</button>
        </div>
    );
}

export default App;

