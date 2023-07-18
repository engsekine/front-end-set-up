interface Meta {
    title: string;
    description: string;
    imageUrl: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
    siteUrl: string;
}

interface DefaultMeta extends Meta {
    iconUrl: string;
    ogLocale: string;
    twitterSite: string;
    twitterCreater: string;
    fbAppId?: string;
}
