import clientConfig from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(clientConfig);

export async function urlFor(source: any) {
  return builder.image(source);
}
