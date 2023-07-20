interface Config {
    siteName: string;
    siteUrl: string;
    twitterSite: string;
    twitterCreater: string;
}

interface Meta {
    title: string;
    description: string;
    imageUrl: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
    siteUrl: string;
    siteName: string;
    ogLocale: string;
    twitterSite: string;
    twitterCreater: string;
}

interface HomeMeta extends Meta {
    iconUrl: string;
}

interface SiteData extends Meta {
    slug: string;
}
