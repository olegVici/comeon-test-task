import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/hooks';
import cx from 'classnames';

// Actions
import { filterByCategory } from 'store/entities/games/reducer';

// Selectors
import { selectorCategories, selectorCurrentCategory } from 'store/entities/games/selector';

// Components
import Title from 'shared/components/Title';

// Styles
import './categories.scss';

const Categories: FC = memo(() => {
	const dispatch = useAppDispatch();
	const categories = useSelector(selectorCategories);
	const currentCategory = useSelector(selectorCurrentCategory);

	const handleChangeCategory = (categoryId: number) => {
		dispatch(filterByCategory(categoryId));
	};

	return (
		<div>
			<Title title="Categories" />

			<div className="categories">
				{categories.map(category => (
					<div
						className={cx('categories__item', {
							categories__item_active: currentCategory === category.id,
						})}
						key={category.id}
						role="presentation"
						onClick={() => handleChangeCategory(category.id)}
					>
						{category.name}
					</div>
				))}
			</div>
		</div>
	);
});

export default Categories;
