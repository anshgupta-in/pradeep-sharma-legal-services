import { GoogleGenAI } from "@google/genai";
import { LAWYER_DETAILS, SERVICES, DETAILED_SERVICES } from "../constants";

// Read API key from Vite env (define VITE_GEMINI_API_KEY in your .env file)
const GEMINI_API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY as string | undefined;

const ai = GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: GEMINI_API_KEY })
  : null;

const SYSTEM_INSTRUCTION = `
You are the virtual legal assistant for ${LAWYER_DETAILS.name}'s law firm.
Your goal is to be helpful, professional, and concise.

Here is the context about the firm:
- Lawyer Name: ${LAWYER_DETAILS.name}
- Title: ${LAWYER_DETAILS.title}
- Experience: ${LAWYER_DETAILS.experience}
- Office Address: ${LAWYER_DETAILS.address}
- Phone: ${LAWYER_DETAILS.phone}
- Email: ${LAWYER_DETAILS.email}
- Office Hours: ${LAWYER_DETAILS.officeHours}

Core Services Offered:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Specialized Documentation & Registration Services:
${DETAILED_SERVICES.map(s => `- ${s}`).join('\n')}

Rules:
1. Answer questions about office location, hours, and specific services based on the context above.
2. If a user asks for legal advice, gently state that you are an AI assistant and they should book an appointment for legal counsel.
3. If they want to book an appointment, guide them to the 'Book Appointment' section of the website.
4. Keep responses brief (under 50 words) unless detailed explanation is needed.
`;

export const sendMessageToGemini = async (userMessage: string, useThinking: boolean = false): Promise<string> => {
  try {
    if (!ai) {
      console.error("Gemini API key is missing. Set VITE_GEMINI_API_KEY in your .env file.");
      return "Our virtual assistant is temporarily unavailable. Please call the office or use the contact form.";
    }

    // Select model based on mode
    const model = useThinking ? 'gemini-3-pro-preview' : 'gemini-2.5-flash-lite';
    
    const config: any = {
      systemInstruction: SYSTEM_INSTRUCTION,
    };

    // Configure thinking mode if enabled
    if (useThinking) {
      config.thinkingConfig = { thinkingBudget: 32768 };
      // Note: maxOutputTokens must not be set when using thinkingConfig
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: config
    });
    
    return response.text || "I apologize, I am unable to answer that right now. Please call our office directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties. Please try again later.";
  }
};