import React from 'react';
import { siteData, metaArg } from '@/app/test2/index';

export const metadata = metaArg;
console.log(siteData.slug);
export default function Test2() {
    return (
        <>
            <main>
                <p>{siteData.slug}</p>
            </main>
        </>
    );
}
