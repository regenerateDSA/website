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
                description: fields.text({ label: 'Description', validation: { isRequired: true } }),
                pubDate: fields.date({ label: 'Publication Date', validation: { isRequired: true } }),
                updatedDate: fields.date({ label: 'Updated Date', validation: { isRequired: false } }),
                content: fields.mdx({ label: 'Content', extension: "md" }),
                heroImage: fields.image({ label: 'Hero Image', validation: { isRequired: true } })
            },
        }),
        top8: collection({
            label: 'Top 8 Organizations',
            slugField: 'organization',
            path: 'src/content/top8/*',
            format: { contentField: 'content' },
            schema: {
                organization: fields.slug({ name: { label: 'Organization' }, validation: { isRequired: true } }),
                why: fields.text({ label: 'Why', validation: { isRequired: true } }),
                logo: fields.url({ label: 'Logo URL', validation: { isRequired: true } }),
                color: fields.text({ label: 'Color', validation: { isRequired: true } }),
                content: fields.mdx({ label: 'Content', extension: "md" }),
            },
        }),
    },
});