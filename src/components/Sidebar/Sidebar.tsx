// external
import { useRouter } from 'next/router';
import Link from 'next/link';

// components
import Text from '../Text/Text';

// types/constants
import { Post } from './../../types';

// assets
import styles from './Sidebar.module.css';

export interface SidebarProps {
	posts: Post[];
}

export function Sidebar({ posts }: SidebarProps) {
	const { query } = useRouter();
	return (
		<nav className={styles.container}>
			<ul>
				<li>
					<Link href='/'>
						<Text>Home</Text>
					</Link>
				</li>
				{posts.map((post) => {
					return (
						<li key={`post-${post.id}`}>
							<Link href={`/post/${post.id}`}>
								{post.id === query?.id ? (
									<Text bold>{post.title}</Text>
								) : (
									<Text>{post.title}</Text>
								)}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Sidebar;
