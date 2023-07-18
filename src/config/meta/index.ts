import { Metadata } from 'next';
import { config } from '../config';

export const defaultMeta: DefaultMeta = {
    iconUrl: `${config.siteUrl}/favicon.ico`
};

export const defaultMetaArg: Metadata = {
    icons: {
        icon: defaultMeta.iconUrl,
        shortcut: defaultMeta.iconUrl,
        apple: defaultMeta.iconUrl
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
