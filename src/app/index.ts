import { Metadata } from 'next';
import { config } from '@/config';

const siteData: HomeMeta = {
    title: 'string',
    description: 'string',
    imageUrl: 'http://localhost:3000/favicon.ico',
    imageType: 'image/png',
    imageWidth: '1200',
    imageHeight: '630',
    siteUrl: config.siteUrl,
    siteName: config.siteName,
    ogLocale: 'ja_JP',
    twitterSite: config.twitterSite,
    twitterCreater: config.twitterCreater,
    iconUrl: `${config.siteUrl}/favicon.ico`
};

export const metaArg: Metadata = {
    title: siteData.title,
    description: siteData.description,
    openGraph: {
        title: siteData.title,
        description: siteData.description,
        url: siteData.siteUrl,
        siteName: siteData.siteName,
        images: [
            {
                url: siteData.imageUrl,
                width: siteData.imageWidth,
                height: siteData.imageHeight,
                type: siteData.imageType
            }
        ],
        locale: siteData.ogLocale,
        type: 'website'
    },
    twitter: {
        title: siteData.title,
        description: siteData.description,
        card: 'summary_large_image',
        site: siteData.twitterSite,
        creator: siteData.twitterCreater,
        images: siteData.imageUrl
    },
    metadataBase: new URL(siteData.siteUrl),
    alternates: {
        canonical: '/'
    },
    icons: {
        icon: siteData.iconUrl,
        shortcut: siteData.iconUrl,
        apple: siteData.iconUrl
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
