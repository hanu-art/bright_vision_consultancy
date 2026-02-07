
import { DeepSeekService } from '../services/deepseek.serves.js';
import { successResponse ,
  errorResponse
 } from '../utils/response.utils.js';

import { asyncHandler } from '../middelware/chatError.middleware.js';
import { deepSeek } from '../config/env.config.js';

const deepSeekService = new DeepSeekService(deepSeek.DEEPSEEK_API_KEY);

export const chatController = {
  // Main chat endpoint
  chat: asyncHandler(async (req, res) => {
    const { question } = req.body;

    const result = await deepSeekService.getChatResponse(question);

    if (!result.success) {
      return errorResponse(res, result.error, result.code || 500);
    }

    successResponse(res, 'Response generated successfully', {
      response: result.response,
      tokens: result.tokens
    });
  }),

  // Health check
  health: asyncHandler(async (req, res) => {
    successResponse(res, 'Indore Career Guide API is running', {
      service: 'Indore Career Guide',
      version: '1.0.0',
      allowed_topics: ['Colleges', 'IT Institutes', 'IT/MBA Jobs'],
      location: 'Indore/MP specific'
    });
  }),

  // Get allowed topics
  getTopics: asyncHandler(async (req, res) => {
    successResponse(res, 'Allowed topics for consultation', {
      topics: [
        {
          name: 'Colleges',
          description: 'Indore/MP ke engineering, medical, arts, commerce colleges',
          examples: [
            'Indore ke engineering colleges?',
            'MP ke medical colleges ki fees?'
          ]
        },
        {
          name: 'IT Institutes',
          description: 'Indore ke IT coaching aur training institutes',
          examples: [
            'Indore mein web development coaching?',
            'Python course konsa institute achha hai?'
          ]
        },
        {
          name: 'Jobs',
          description: 'Indore/India ke IT aur MBA jobs',
          examples: [
            'Indore mein MBA jobs ka scope?',
            'IT fresher jobs in Indore?'
          ]
        }
      ],
      disclaimer: 'Sirf Indore/MP specific queries ke jawab diye jaayenge'
    });
  })
};