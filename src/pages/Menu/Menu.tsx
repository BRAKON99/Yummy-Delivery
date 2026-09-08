import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css'

export function Menu() {
	return <>
		<div className={styles['head']}>
			<Heading>Меню</Heading>
			<Search placeholder="Поиск игрушек" />
		</div>
		<div>
			<ProductCard id={1} title='Lego' descr='Набор Lego' rating={4.5} price={2500} image='/product1.png' />
		</div>
	</>
}