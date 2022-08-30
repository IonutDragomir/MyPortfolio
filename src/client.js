import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ls813ku9",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skNkGmybYlXldXMrZPLZHa1Q0EC5RLE1wx6nwPAG9JdrI82QBZkqEqX1FFwDP0wm8nCU8BiAPcwJUWOl1Sux42qphO4y8YpoYm0UxBpwPeWn6lvyCLq60wdWQR7jbgjHDMOfRJol0rZVBKWyQK3RS5SKlnWhYFKsRwUq6tsvROgyUAlv9CPE",
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
