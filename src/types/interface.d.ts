interface Meta {
    title: string;
    description: string;
    imageUrl: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
    ogType: string;
    siteUrl: string;
    noIndexNoFollow: string;
}

interface DefaultMeta extends Meta {
    iconUrl?: string;
    ogLocale?: string;
    formatDetection?: string;
    twitterCard?: string;
    twitterSite?: string;
    fbAppId?: string;
}
