import Joi from "joi";

const schemaRegisterUser = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().min(10).required(),
});

export { schemaRegisterUser };