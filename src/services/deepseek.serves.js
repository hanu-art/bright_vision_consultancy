import axios from 'axios';
import { deepSeek } from '../config/env.config.js';
import { SYSTEM_PROMPT } from '../config/constants.js';
const DEEPSEEK_API_URL =  deepSeek.DEEPSEEK_API_URL;

export class DeepSeekService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: DEEPSEEK_API_URL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });
  }

  async getChatResponse(question) {
    try {
      const response = await this.client.post('', {
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: question }
        ],
        max_tokens: 150, // Limited output
        temperature: 0.7,
        stream: false
      });

      return {
        success: true,
        response: response.data.choices[0].message.content,
        tokens: response.data.usage?.total_tokens || 0
      };
    } catch (error) {
      console.error('DeepSeek API Error:', error.response?.data || error.message);
      
      return {
        success: false,
        error: error.response?.data?.error?.message || 'AI service unavailable',
        code: error.response?.status || 500
      };
    }
  }
}