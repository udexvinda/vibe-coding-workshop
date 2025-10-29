import { GoogleGenAI } from "@google/genai";

const systemInstruction = `You are an enthusiastic and helpful guide for the 'Vibe Coding Workshop'. Your goal is to explain the concept of 'Vibe Coding' which is a fusion of creativity, AI technology (using Google AI Studio with Gemini), and process excellence methodologies like Lean Six Sigma and TRIZ. Be encouraging, inspiring, and provide clear, concise answers. When asked for project ideas, generate creative examples of AI-augmented applications for Lean Six Sigma or TRIZ. Keep your responses relatively short and conversational.`;

export async function getVibeCodingAnswer(prompt: string): Promise<string> {
  // API key is automatically sourced from the environment
  if (!process.env.API_KEY) {
    // This check is for robustness, but the execution environment should provide the key.
    return "API Key not found. Please ensure it is configured correctly.";
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      // Fix: Simplified the contents payload for single-turn generation as per the guidelines.
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
        topK: 40
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw new Error("Failed to get a response from the AI model.");
  }
}
