export default {
    name: 'websites',
    title: 'Websites',
    type: 'document',
    fields: [
      {
        name: 'websiteTitle',
        title: 'Website Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'websiteImg',
        title: 'websiteImg',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name:'skillTitle',
        title:'Skill Title',
        type:'string'
    },
    {
      name:'skillIcon',
      title:'Skill Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
  },

      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };