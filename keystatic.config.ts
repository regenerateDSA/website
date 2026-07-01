// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        posts: collection({
            label: 'Mailing List Posts',
            slugField: 'title',
            path: 'src/content/mailing-list/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description' }),
                pubDate: fields.date({ label: 'Publication Date' }),
                updatedDate: fields.date({ label: 'Updated Date', validation: { isRequired: false } }),
                content: fields.mdx({ label: 'Content' }),
                heroImage: fields.image({ label: 'Hero Image' })
            },
        }),
        top8: collection({
            label: 'Top 8 Organizations',
            slugField: 'organization',
            path: 'src/content/top8/*',
            format: { contentField: 'why' },
            schema: {
                organization: fields.slug({ name: { label: 'Organization' } }),
                why: fields.text({ label: 'Why' }),
                logo: fields.url({ label: 'Logo URL' }),
                color: fields.text({ label: 'Color' })
            },
        }),
    },
});