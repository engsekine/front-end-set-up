import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'サイトの説明',
    keywords: '',
    openGraph: {
        title: 'サイトのタイトル2',
        description: 'サイトの説明',
        url: 'https://example.com',
        siteName: 'サイトのタイトル',
        images: [
            {
                url: 'https://example.com/og.png',
                width: 800,
                height: 600,
                type: 'image/png'
            }
        ],
        locale: 'ja_JP',
        type: 'article'
    },
    twitter: {
        title: 'サイトのタイトル',
        description: 'サイトの説明',
        card: 'summary_large_image',
        site: '@site',
        creator: '@creator',
        images: 'https://example.com/og.png'
    },
    alternates: {
        canonical: '/test'
    }
};
export default function Test() {
    return (
        <>
            <main></main>
        </>
    );
}
