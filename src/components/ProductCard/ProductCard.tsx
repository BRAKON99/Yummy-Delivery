import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'
import { ProductCardProps } from './ProductCard.props';

function ProductCard({ id, title, descr, price, rating, image }: ProductCardProps) {
	return (
		<Link to={`/product/${id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{ backgroundImage: `url('${image}')` }}>
					<div className={styles['price']}>
						{price}
						<span className={styles['rub']}>₽</span>
					</div>
					<button className={styles['add-to-cart']}>
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