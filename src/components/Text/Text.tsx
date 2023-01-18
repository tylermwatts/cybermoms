// external
import { PropsWithChildren } from 'react';
import { Roboto } from '@next/font/google';
import classNames from 'classnames';

const ELEMENT_TYPE = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sub'] as const;
const FONT_STYLE = ['italic'] as const;

export type ElementType = typeof ELEMENT_TYPE[number];
export type FontStyle = typeof FONT_STYLE[number];

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

import styles from './Text.module.css';

export interface TextProps {
	bold?: boolean;
	/**
	 * Default is "p" tag.
	 */
	elementType?: ElementType;
	fontStyle?: FontStyle;
}

export function Text({
	bold = false,
	children,
	elementType,
	fontStyle,
}: PropsWithChildren<TextProps>) {
	const className = classNames(
		roboto.className,
		fontStyle && styles[fontStyle],
		bold && styles.bold
	);
	switch (elementType) {
		case 'h1':
			return <h1 className={className}>{children}</h1>;
		case 'h2':
			return <h2 className={className}>{children}</h2>;
		case 'h3':
			return <h3 className={className}>{children}</h3>;
		case 'h4':
			return <h4 className={className}>{children}</h4>;
		case 'h5':
			return <h5 className={className}>{children}</h5>;
		case 'h6':
			return <h6 className={className}>{children}</h6>;
		case 'sub':
			return <sub className={className}>{children}</sub>;
		case 'p':
		default:
			return <p className={className}>{children}</p>;
	}
}

export default Text;
