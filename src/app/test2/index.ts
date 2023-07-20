import { Metadata } from 'next';
import { config } from '@/config';

export const siteData: SiteData = {
    slug: 'slug',
    title: 'title',
    description: 'stringaaaa',
    imageUrl: 'http://localhost:3000/favicon.ico',
    imageType: 'image/png',
    imageWidth: '1200',
    imageHeight: '630',
    siteUrl: config.siteUrl,
    siteName: config.siteName,
    ogLocale: 'ja_JP',
    twitterSite: config.twitterSite,
    twitterCreater: config.twitterCreater
};

export const metaArg: Metadata = {
    title: `${siteData.title} | ${siteData.siteName}`,
    description: siteData.description,
    openGraph: {
        title: `${siteData.title} | ${siteData.siteName}`,
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
        type: 'article'
    },
    twitter: {
        title: `${siteData.title} | ${siteData.siteName}`,
        description: siteData.description,
        card: 'summary_large_image',
        site: siteData.twitterSite,
        creator: siteData.twitterCreater,
        images: siteData.imageUrl
    },
    alternates: {
        canonical: '/aa'
    }
};
