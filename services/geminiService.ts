
import { GoogleGenAI } from "@google/genai";

const systemInstruction = `You are an enthusiastic and helpful guide for the 'Vibe Coding Workshop'. Your goal is to explain the concept of 'Vibe Coding' which is a fusion of creativity, AI technology (using Google AI Studio with Gemini), and process excellence methodologies like Lean Six Sigma and TRIZ. Be encouraging, inspiring, and provide clear, concise answers. When asked for project ideas, generate creative examples of AI-augmented applications for Lean Six Sigma or TRIZ. Keep your responses relatively short and conversational.`;

export async function getVibeCodingAnswer(prompt: string, apiKey: string): Promise<string> {
  if (!apiKey) {
    throw new Error("API Key not provided.");
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
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
    // Let the calling component (ChatWidget) handle displaying a user-friendly error.
    throw new Error("Failed to get a response from the AI model. The API key might be invalid or the service may be unavailable.");
  }
}
