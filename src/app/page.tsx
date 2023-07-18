import React from 'react';
import { Metadata } from 'next';
import { HomeMeta } from '@/config';

export const metadata: Metadata = {
    title: HomeMeta.title,
    description: HomeMeta.description,
    openGraph: {
        title: HomeMeta.title,
        description: HomeMeta.description,
        url: HomeMeta.siteUrl,
        siteName: HomeMeta.title,
        images: [
            {
                url: HomeMeta.imageUrl,
                width: HomeMeta.imageWidth,
                height: HomeMeta.imageHeight,
                type: HomeMeta.imageType
            }
        ],
        locale: HomeMeta.ogLocale,
        type: 'website'
    },
    twitter: {
        title: HomeMeta.title,
        description: HomeMeta.description,
        card: 'summary_large_image',
        site: HomeMeta.twitterSite,
        creator: HomeMeta.twitterCreater,
        images: HomeMeta.imageUrl
    },
    metadataBase: new URL(HomeMeta.siteUrl),
    alternates: {
        canonical: '/'
    },
    icons: {
        icon: HomeMeta.iconUrl,
        shortcut: HomeMeta.iconUrl,
        apple: HomeMeta.iconUrl
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true
        }
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1
    }
};

export default function Home() {
    return <main></main>;
}
