import { FC } from 'react';
import { Form, Formik, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { useCookies } from 'react-cookie';

// Types
import { LoginUserDto } from 'shared/types/dto/user.dto';
import { toast } from 'react-toastify';

// Components
import { Button } from 'semantic-ui-react';
import AppInput from 'shared/components/AppInput';

// Actions
import { login } from 'store/entities/user/actions';

// Constance
import { ROUTERS } from 'core/constants/routes';

// Utils
import { validationLoginSchema } from 'shared/validation/auth.validation';

// Styles
import './signIn.scss';

const initFormik: LoginUserDto = {
	username: '',
	password: '',
};

const SignIn: FC = () => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const [, setCookie] = useCookies(['user']);

	const handleSubmit = async (user: LoginUserDto): Promise<void> => {
		const isLogged = await dispatch(login(user)).unwrap();

		if (isLogged) {
			setCookie('user', isLogged);
			history.push(ROUTERS.HOME);
			toast.success('Success.');
		}
	};

	return (
		<Formik
			initialValues={initFormik}
			validateOnBlur
			validationSchema={validationLoginSchema}
			onSubmit={handleSubmit}
		>
			{({ dirty, isValid }) => (
				<Form className="sign-in">
					<div className="sign-in__form">
						<h2>Login</h2>

						<Field name="username" placeholder="Username" component={AppInput} />
						<Field name="password" placeholder="Password" component={AppInput} />

						<Button primary disabled={!dirty || !isValid} type="submit">
							Login
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default SignIn;
