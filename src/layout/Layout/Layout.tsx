import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './Layout.module.css'
import Button from "../../components/Button/Button";
import { cn } from 'cn';

export function Layout() {
	const navigate = useNavigate()

	const logOut = () => {
		localStorage.removeItem('jwt')
		navigate('/auth/login')
	}

	return <div className={styles['layout']}>
		<div className={styles['side-bar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src="/MenuIcon/avatar.svg" alt="Аватар" />
				<div className={styles['name']}>Сергей Кондратьев</div>
				<div className={styles['email']}>ksa.444@mail.ru</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to="/" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/MenuIcon/menu-icon.svg" alt="Меню" />
					Меню
				</NavLink>
				<NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/MenuIcon/cart-icon.svg" alt="Корзина" />
					Корзина
				</NavLink>
			</div>
			<Button className={styles['exit']} onClick={logOut}>
				<img src="/MenuIcon/exit.svg" alt="Выход" />
				Выйти
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div >
}