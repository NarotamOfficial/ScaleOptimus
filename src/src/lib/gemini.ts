import { GoogleGenAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyBkbqb2gH-c3mwWhYgWyGw6ud0nUxJwKag';
export const genAI = new GoogleGenAI({ apiKey });
