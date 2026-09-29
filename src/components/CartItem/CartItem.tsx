import styles from './CartItem.module.css'
import { useDispatch } from 'react-redux';
import { appDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<appDispatch>()

	const increase = () => {
		dispatch(cartActions.add(props.id))
	}

	const decrease = () => {
		dispatch(cartActions.remove(props.id))
	}

	const remove = () => {
		dispatch(cartActions.delete(props.id))
	}

	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
			<div className={styles['descr']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}> {props.price}₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={decrease}>
					<img className={styles['cart']} src="/public/Cart/-.svg" alt="Удалить" />
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img className={styles['cart']} src="/Cart/+.svg" alt="Добавить" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img className={styles['cart']} src="Cart/Закрыть.svg" alt="Удалить все" />
				</button>
			</div>
		</div>
	)
}

export default CartItem;