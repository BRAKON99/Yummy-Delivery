import { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import styles from './Menu.module.css'
import axios from "axios";
import { MenuList } from "./MenuList/MenuList";

export function Menu() {
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>()

	const getMenu = async () => {
		try {
			setIsLoading(true)
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve()
				}, 1500)
			})
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
			setProducts(data)
			setIsLoading(false)
		} catch (e) {
			console.error(e)
			if (axios.isAxiosError(e)) {
				setError(e.message)
			}
			setIsLoading(false)
			return;
		}
	};

	useEffect(() => {
		getMenu()
	}, [])

	return <>
		<div className={styles['head']}>
			<Heading>Меню</Heading>
			<Search placeholder="Введите блюдо или состав" />
		</div>
		<div className={styles['product-menu']}>
			{error && <>{error}</>}
			{!isLoading && <MenuList products={products} />}
			{isLoading && <div className={styles['loader-wrapper']}> <div className={styles['loader']} />
			</div>}
		</div>
	</>
}