module.exports = {
    stories: ['../src/**/*.stories.@(ts)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-coverage',
            options: {
                istanbul: {
                    exclude: ['**/components/**/index.ts']
                }
            }
        }
    ],
    features: {
        storyStoreV7: true,
        interactionsDebugger: true
    },
    typescript: {
        reactDocgen: 'react-docgen'
    },
    framework: {
        name: '@storybook/nextjs',
        options: {}
    },
    docs: {
        autodocs: true
    }
};
