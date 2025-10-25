export const Categories = [
  'arts_and_leisure',
  'film_and_tv',
  'food_and_drink',
  'general_knowledge',
  'geography',
  'history',
  'music',
  'science',
  'society_and_culture',
  'sports_and_leisure',
] as const;

export type Category = typeof Categories[number];

export interface Question {
  category: string;
  id: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  regions: string[];
  isNiche: boolean;
  question: {
    text: string;
  };
  correctAnswer: string;
  incorrectAnswers: string[];
  type: string;
}

export interface QuestionsQueryParams {
  limit?: number;
  categories?: string;
  difficulties?: string;
  region?: string;
  tags?: string;
}
