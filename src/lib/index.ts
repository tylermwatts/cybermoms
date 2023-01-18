import { Post } from '@/types';

export async function getAllPostsFetcher(url: string) {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(async (res) => {
		const data = await res.json();
		return JSON.parse(data.posts);
	});
}

export async function getAllPostIds() {
	const paths = await getAllPostsFetcher('http://localhost:3001/posts').then(
		(posts: Post[]) => posts.map(({ id }) => ({ params: { id } }))
	);
	return paths;
}

export async function getPostByIdFetcher(url: string) {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(async (res) => {
		const data = await res.json();
		return JSON.parse(data.post);
	});
}
