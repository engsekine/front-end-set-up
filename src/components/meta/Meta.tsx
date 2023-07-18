import React from 'react';
import { MetaConfig } from '../../config/index';
export function Meta() {
    return (
        <>
            <meta
                property='og:locale'
                content={MetaConfig.ogLocale}
            />
            <meta
                property='og:image:width'
                content={MetaConfig.ogImageWidth}
            />
            <meta
                property='og:image:height'
                content={MetaConfig.ogImageHeight}
            />
            <meta
                name='format-detection'
                content={MetaConfig.formatDetection}
            />
            <meta
                name='robots'
                content={MetaConfig.robots}
            />
            <meta
                name='twitter:card'
                content={MetaConfig.twitterCard}
            />
            <meta
                name='twitter:site'
                content={MetaConfig.twitterSite}
            />
            <meta
                property='fb:app_id'
                content={MetaConfig.fbAppId}
            />
        </>
    );
}
