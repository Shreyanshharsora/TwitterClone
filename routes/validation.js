// Validation
const Joi = require('@hapi/joi');

// Register validation
const registerValidation = data => {
    
    const validateSchema = Joi.object({

        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6).required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return validateSchema.validate(data);
    //return Joi.validate(data,validateSchema);
}

// Login validation
const loginValidation = data => {
    
    const validateSchema = Joi.object({
        email: Joi.string()
            .min(6).required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return validateSchema.validate(data);
}


// Post validation
const postValidation = data => {
    
    const validateSchema = Joi.object({
        postdata: Joi.string()
            .min(6).required()
            .max(255),
        commenterName: Joi.string()
            .min(6)
            .max(255)
    });
    return validateSchema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.postValidation=postValidation; 