import ImageUrlBuilder from "@sanity/image-url";
import client from "./client";

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(600).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(1280).url();
}

export { urlFor, urlForThumbnail };
