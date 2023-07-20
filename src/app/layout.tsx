import React from 'react';
import { Header, Footer } from '@/components/index';
import { Inter } from 'next/font/google';
import '@/styles/style.scss';
import { metaArg } from '@/app/index';

export const metadata = metaArg;

const inter = Inter({ subsets: ['latin'] });

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
