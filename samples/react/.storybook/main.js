module.exports = {
    stories: [
        '../src/**/*.stories.(js|mdx)'
    ],
    addons: [
        '@storybook/addon-a11y/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-docs',
        '@storybook/addon-knobs/register',
        '@storybook/addon-links/register',
        '@storybook/addon-viewport/register',
    ]
};
