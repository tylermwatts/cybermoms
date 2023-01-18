import Link from 'next/link';
import { useRouter } from 'next/router';

import { Inter } from '@next/font/google';

import { Post } from './../../types/index';

import styles from './Sidebar.module.css';
import Text from '../Text/Text';

export interface SidebarProps {
	posts: Post[];
}

export default function Sidebar({ posts }: SidebarProps) {
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
