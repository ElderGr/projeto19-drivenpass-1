import Joi from "joi";

const RegisterUser = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().min(10).required(),
});

const SignIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
});

export { RegisterUser, SignIn };