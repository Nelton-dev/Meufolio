import { GoogleGenAI, Chat } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS, OTAKU_FAVORITES } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
};

// Function to fetch latest tech and anime news using Gemini with Google Search
export const fetchLatestNews = async () => {
  const client = getClient();
  if (!client) {
    return { 
      content: "BREVEMENTE.", 
      sources: [] 
    };
  }

  try {
    // Using gemini-2.5-flash for grounding support
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Quais são as 3 principais notícias de hoje sobre Cibersegurança (Kali Linux, vulnerabilidades, hackers) e as novidades mais quentes do mundo dos Animes? Resuma em tópicos curtos e diretos, com um tom informativo e sério.",
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    const text = response.text || "Sem dados disponíveis no momento.";
    
    // Extract sources from grounding chunks
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map((chunk: any) => chunk.web?.uri)
      .filter((uri: string) => uri) || [];

    // Unique sources only
    const uniqueSources = Array.from(new Set(sources));

    return {
      content: text,
      sources: uniqueSources
    };

  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return { 
      content: "Falha na conexão com o satélite. Não foi possível recuperar as intel de hoje.", 
      sources: [] 
    };
  }
};

// Deprecated or simplified chat initialization if needed elsewhere, 
// but focused on news for this update.
export const initializeChat = (): boolean => {
  return !!getClient();
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Placeholder implementation if chat is removed but imported somewhere
  return "Chat offline.";
};