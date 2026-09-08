import styles from './Heading.module.css';
import type { HeadingProps } from './Heading.props';

function Heading({ children, className, ...props }: HeadingProps) {
	return (
		<h1 {...props} className={styles['heading']}>{children}</h1>
	);
}

export default Heading;