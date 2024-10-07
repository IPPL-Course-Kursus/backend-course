// courseLevelValidation.ts
import Joi from 'joi';

export const courseLevelSchema = Joi.object({
  levelName: Joi.string().min(2).max(30).required(),
});
