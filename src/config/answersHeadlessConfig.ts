import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: '98c6e95488bdb9ca0398672467af70a1',
  experienceKey: 'ds-answer-search',
  locale: 'en_gb',
  sessionTrackingEnabled: true
};