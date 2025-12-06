import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const COMPANY_CONTEXT = `
You are the AI Sales Assistant for 'Apex Precision Industries' (艾佩斯精密制造).
Company Profile:
- Established: 1998
- Location: Suzhou Industrial Park, China
- Certifications: ISO 9001, IATF 16949, ISO 14001
- Core Business: High-precision CNC machining, Plastic Injection Molding, Sheet Metal Fabrication, and automated assembly.
- Industries Served: Automotive, Aerospace, Medical Devices, Consumer Electronics.
- Production Capacity: 24/7 automated production lines, capable of handling orders from prototype to mass production (1M+ units).
- Key Advantages: <0.005mm tolerance precision, rapid prototyping (3 days), global logistics support.

Your goal is to answer visitor questions professionally, concisely, and encouragingly. 
If asked about pricing, explain that it depends on materials and volume, and encourage them to fill out the Request for Quote (RFQ) form.
Always be polite and professional. Answer in the same language as the user (default to Chinese).
`;

export const askAiAssistant = async (userQuestion: string): Promise<string> => {
  if (!apiKey) {
    return "系统配置错误：未检测到 API Key。请联系管理员。";
  }

  try {
    const model = "gemini-2.5-flash";
    const response = await ai.models.generateContent({
      model: model,
      contents: userQuestion,
      config: {
        systemInstruction: COMPANY_CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "抱歉，我现在无法回答这个问题，请稍后再试或直接联系人工客服。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "智能助手暂时繁忙，请检查网络连接或稍后再试。";
  }
};