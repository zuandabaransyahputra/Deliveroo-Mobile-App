export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_desctiprion",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image Of The Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude Of The Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude Of The Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address Of The Restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from (1-5 start)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 - 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Category",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
