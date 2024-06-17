const yup = require('yup');

const addPostSchema = yup.object({
  title: yup.string().min(10, 'At least 10 symbols').required('Required field!'),
  text: yup.string().min(50, 'At least 50 symbols').required('Required field')
});

module.exports = addPostSchema;
