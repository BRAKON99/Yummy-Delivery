import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './Layout.module.css'
import Button from "../../components/Button/Button";
import { cn } from 'cn';
import { useDispatch, useSelector } from "react-redux";
import { appDispatch, RootState } from "../../store/store";
import { getProfile, userActions } from "../../store/user.slice";
import { useEffect } from "react";

export function Layout() {
	const navigate = useNavigate()
	const dispatch = useDispatch<appDispatch>()
	const profile = useSelector((s: RootState) => s.user.profile)
	const items = useSelector((s: RootState) => s.cart.items)

	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])

	const logOut = () => {
		dispatch(userActions.logout())
		navigate('/auth/login')
	}

	return <div className={styles['layout']}>
		<div className={styles['side-bar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src="/MenuIcon/avatar.svg" alt="Аватар" />
				<div className={styles['name']}>{profile?.name}</div>
				<div className={styles['email']}>{profile?.email}</div>
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
				{items.reduce((acc, item) => acc += item.count, 0)}
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