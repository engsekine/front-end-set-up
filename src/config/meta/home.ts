import { Metadata } from 'next';
import { config } from '../config';
export const homeMeta: HomeMeta = {
    title: 'string',
    description: 'string',
    imageUrl: 'http://localhost:3000/favicon.ico',
    imageType: 'image/png',
    imageWidth: '1200',
    imageHeight: '630',
    siteUrl: config.siteUrl,
    ogLocale: 'ja_JP',
    twitterSite: 'string',
    twitterCreater: 'string',
    iconUrl: `${config.siteUrl}/favicon.ico`
};

export const homeMetaArg: Metadata = {
    title: { default: homeMeta.title, template: `%s | ${homeMeta.title}` },
    description: homeMeta.description,
    openGraph: {
        title: homeMeta.title,
        description: homeMeta.description,
        url: homeMeta.siteUrl,
        siteName: homeMeta.title,
        images: [
            {
                url: homeMeta.imageUrl,
                width: homeMeta.imageWidth,
                height: homeMeta.imageHeight,
                type: homeMeta.imageType
            }
        ],
        locale: homeMeta.ogLocale,
        type: 'website'
    },
    twitter: {
        title: homeMeta.title,
        description: homeMeta.description,
        card: 'summary_large_image',
        site: homeMeta.twitterSite,
        creator: homeMeta.twitterCreater,
        images: homeMeta.imageUrl
    },
    metadataBase: new URL(homeMeta.siteUrl),
    alternates: {
        canonical: '/'
    },
    icons: {
        icon: homeMeta.iconUrl,
        shortcut: homeMeta.iconUrl,
        apple: homeMeta.iconUrl
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
