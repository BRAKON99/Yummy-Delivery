import { Await, useLoaderData } from "react-router-dom"
import { Product } from "../../interfaces/product.interface";
import { Suspense } from "react";

export function ProductPage() {
	const data = useLoaderData() as Product;

	return (
		<>
			<Suspense fallback={'Загружаю...'}>
				<Await
					resolve={data}
					errorElement={<div>Не можем отобразить продукт😬</div>}
				>
					{(resolvedData: Product) => (
						<div>Product: {resolvedData.name}</div>
					)}
				</Await>
			</Suspense>
		</>
	);
}