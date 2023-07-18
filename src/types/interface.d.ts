interface Config {
    siteName: string;
    siteUrl: string;
}

interface Meta {
    title: string;
    description: string;
    imageUrl: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
    siteUrl: string;
}

interface HomeMeta extends Meta {
    ogLocale: string;
    twitterSite: string;
    twitterCreater: string;
    iconUrl: string;
}

interface DefaultMeta {
    iconUrl: string;
}
