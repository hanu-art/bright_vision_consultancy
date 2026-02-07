
import { validateQuestion } from '../../utils/validation.utils.js';
export const validateChatRequest = (req, res, next) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({
      success: false,
      message: 'Question is required'
    });
  }

  const validation = validateQuestion(question);
  
  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: 'Invalid question',
      details: validation.reason
    });
  }

  next();
};