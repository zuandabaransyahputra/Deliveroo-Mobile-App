import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "y5oq1bsv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-12-04",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
