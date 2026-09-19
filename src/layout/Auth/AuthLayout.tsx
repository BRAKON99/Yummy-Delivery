import { Outlet } from "react-router-dom";
import styles from './AuthLayuot.module.css'

export function AuthLayout() {
	return <div className={styles['layout']}>
		<div className={styles['logo']}>
			<img src="/All/AythLogo.svg" alt="Logo" />
		</div >
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>
}