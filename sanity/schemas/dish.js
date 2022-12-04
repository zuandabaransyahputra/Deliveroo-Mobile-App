export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of Dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_desctiprion",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of dish in GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of The Dish",
    },
  ],
};
