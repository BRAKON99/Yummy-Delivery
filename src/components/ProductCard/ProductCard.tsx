import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'
import { ProductCardProps } from './ProductCard.props';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { appDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function ProductCard({ id, title, descr, price, rating, image }: ProductCardProps) {
	const dispatch = useDispatch<appDispatch>()

	const add = (e: MouseEvent) => {
		e.preventDefault()
		dispatch(cartActions.add(id))
	}

	return (
		<Link to={`/product/${id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{
					backgroundImage: `url('${image}')`, backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
					<div className={styles['price']}>
						{price}
						<span className={styles['rub']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img className={styles['cart']} src="/ProductCard/cart.svg" alt="Корзина" />
					</button>
					<div className={styles['rating']}>
						{rating}
						<img src="/ProductCard/star.svg" alt="Рейтинг" />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{title}</div>
					<div className={styles['descr']}>{descr}</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard;