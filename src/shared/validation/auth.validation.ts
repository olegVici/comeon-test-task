import * as yup from 'yup';

export const validationLoginSchema = yup.object().shape({
	username: yup.string().required('Name must be not empty.'),
	password: yup.string().min(3).required('Password must be not empty.'),
});
