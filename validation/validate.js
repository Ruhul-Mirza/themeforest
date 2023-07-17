const Joi = require('joi');

const customMessages = {
    'string.base': '{#label} must be a string',
    'string.empty': '{#label} cannot be empty',
    'any.required': '{#label} is required',
    'date.base': '{#label} must be a valid date',
    'string.email': '{#label} must be a valid email',
    'number.base': '{#label} must be a number',
    'string.min': '{#label} must be at least {#limit} characters long',
    'string.max': '{#label} must not exceed {#limit} characters',
    'number.integer': '{#label} must be an integer'
};

const schema = Joi.object({
    course_name: Joi.string().min(10).max(40).trim().required().messages(customMessages),
    course_duration:joi.number().min(5).max(20).trim().required().messages(customMessages),
    course_durationtype:joi.string().min(5).max(30).trim().required().messages(customMessages), course_fees:joi.number().min(5).max(20).trim().required().messages(customMessages),
    course_type:joi.string().min(5).max(20).trim().required().messages(customMessages),

});

exports.student = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next()
}

