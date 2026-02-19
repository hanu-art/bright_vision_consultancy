

import { ALLOWED_LOCATIONS } from '../config/constants.js';
export const validateQuestion = (question) => {
  if (!question || typeof question !== 'string') {
    return { isValid: false, reason: 'Invalid question format' };
  }

  const lowerQuestion = question.toLowerCase().trim();
  
  // Check if contains allowed location
  const hasLocation = ALLOWED_LOCATIONS.some(loc => 
    lowerQuestion.includes(loc.toLowerCase())
  );

  if (!hasLocation) {
    return { 
      isValid: false, 
      reason: 'Location not specified or not allowed' 
    };
  }

  // Check for allowed topics keywords
  const topicKeywords = [
    'college', 'coaching', 'institute', 'institutes',
    'job', 'jobs', 'career', 'placement',
    'engineering', 'medical', 'mba', 'it', 'software',
    'admission', 'course', 'class', 'training'
  ];

  const hasTopic = topicKeywords.some(keyword => 
    lowerQuestion.includes(keyword)
  );

  if (!hasTopic) {
    return { 
      isValid: false, 
      reason: 'Topic not related to colleges, institutes, or jobs' 
    };
  }

  return { isValid: true };
};