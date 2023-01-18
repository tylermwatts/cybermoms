import { PropsWithChildren } from 'react';
import useSWR from 'swr';

import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { getAllPostsFetcher } from '@/lib';

import styles from './Layout.module.css';

export function Layout({ children }: PropsWithChildren) {
	const {
		data: posts,
		error,
		isLoading,
	} = useSWR('http://localhost:3001/posts', getAllPostsFetcher);

	if (error) return <div>{'An error has occurred'}</div>;
	if (isLoading) return <div>{'Loading...'}</div>;

	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.pageBody}>
				<Sidebar posts={posts} />
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
}

export default Layout;
