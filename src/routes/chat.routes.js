import express from 'express';

import { chatController } from '../controller/chat.controller.js';
import { validateChatRequest } from '../middelware/validation.middleware.js';

const router = express.Router();

// Main chat endpoint
router.post('/chat', validateChatRequest, chatController.chat);

// Health check
router.get('/health', chatController.health);

// Get allowed topics
router.get('/topics', chatController.getTopics);

export default router;