export default {
    name: 'newsletter',
    title: 'Newsletter Posts',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
    ],
  }