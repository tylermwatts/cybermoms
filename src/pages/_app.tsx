import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/layouts/Layout';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Cyber Moms</title>
				<meta name='description' content='Tech parenting advice' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
