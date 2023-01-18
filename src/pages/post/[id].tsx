// external
import { GetStaticPaths, GetStaticProps } from 'next';

// components
import { Text } from '@/components';

// types/constants
import { Post } from '@/types';

// utils
import { getAllPostIds, getPostByIdFetcher } from '@/lib';

// assets
import styles from './Post.module.css';

export interface PostProps {
	error?: boolean;
	postData: Post;
}

export function Post({ error, postData }: PostProps) {
	if (error) return <div>Post not found!</div>;

	return (
		<article className={styles.post}>
			<Text elementType='h2'>{postData.title}</Text>
			<Text>{postData.content}</Text>
		</article>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.id || Array.isArray(params.id)) {
		return {
			props: {
				error: true,
			},
		};
	}
	const postData = await getPostByIdFetcher(
		`http://localhost:3001/posts/${params.id}`
	);
	return {
		props: {
			postData,
		},
	};
};

export default Post;
