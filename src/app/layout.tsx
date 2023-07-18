import React from 'react';
import { Header, Footer } from '@/components/index';
import { Inter } from 'next/font/google';
import '@/styles/style.scss';

import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: { default: 'Dashboard', template: '%s | My Website' },
    description: 'サイトの説明',
    keywords: '',
    openGraph: {
        title: 'サイトのタイトル',
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
        type: 'website'
    },
    twitter: {
        title: 'サイトのタイトル',
        description: 'サイトの説明',
        card: 'summary_large_image',
        site: '@site',
        creator: '@creator',
        images: 'https://example.com/og.png'
    },
    metadataBase: new URL('https://example.com'),
    alternates: {
        canonical: '/'
    }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang='ja'
            className={inter.className}
        >
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
