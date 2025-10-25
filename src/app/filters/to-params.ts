import { QuestionsQueryParams } from '../trivia-api/models';

export const toParams = (filters: { limit: number; categories?: string }): QuestionsQueryParams => {
  const params: QuestionsQueryParams = {...filters}

  Object.keys(params).forEach((key) => {
    if (Object.hasOwn(params, key) && params[key as keyof QuestionsQueryParams] === undefined) {
      delete params[key as keyof QuestionsQueryParams]
    }
  })

  return params;
};
