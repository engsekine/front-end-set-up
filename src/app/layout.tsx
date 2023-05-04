import React from 'react';
import { Header, Footer } from '@/components/index';
import { Inter } from 'next/font/google';
import '@/styles/style.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'sekine frontend',
    description: 'sekine frontend'
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
