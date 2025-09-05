export interface TriviaResponse {
  response_code: number;
  results: Question[];
}

export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const ResponseMessages = [
  'Success',
  "There aren't enough results, try requesting fewer questions",
  'There seems to be an issue with one of your filters, try changing them and requesting the questions again',
  "You don't have a session, try refreshing the app to start a new one",
  'You have seen all the available questions, try refreshing the app to start a new session',
  "You've requested too many questions at once, wait a few moments and try again",
] as const;
