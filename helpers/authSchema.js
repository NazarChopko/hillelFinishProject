const yup = require('yup');

const authSchema = yup.object({
  email: yup.string().email('Email is incorrect!').required('Required field!'),
  password: yup.string().min(4, 'At least 4 symbols').required('Required field')
});

module.exports = authSchema;
