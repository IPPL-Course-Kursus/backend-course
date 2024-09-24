import * as Joi from 'joi';

export const categoryValidation = Joi.object({
  categoryName: Joi.string().min(3).max(50).required(),
  image: Joi.string().uri().required(),
});
