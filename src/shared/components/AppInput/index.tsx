import { FC } from 'react';
// import cx from 'classnames';
import { Input } from 'semantic-ui-react';

const AppInput: FC = ({ field, meta, form, validate, ...props }: any) => {
	return (
		<>
			<Input {...field} {...props} />

			{/* TODO: Add error handler */}
			{/* <div
				className={cx('input-error hide', {
					show: meta?.touched && !!meta?.error,
				})}
			>
				{meta?.error}
			</div> */}
		</>
	);
};

export default AppInput;
