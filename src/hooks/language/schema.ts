import { z } from 'zod';

export const enum SupportedLanguages {
  EN_EN = 'en-EN',
  FR_FR = 'fr-FR',
  ES_ES = 'es-ES',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN_EN,
  SupportedLanguages.FR_FR,
  SupportedLanguages.ES_ES,
]);

export type Language = z.infer<typeof languageSchema>;
