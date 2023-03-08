export default {
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Published date",
      name: "publishedDate",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    // {
    //   name: "categories",
    //   type: "array",
    //   title: "Categories",
    //   of: [{ type: "reference", to: { type: "category" } }],
    // },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
