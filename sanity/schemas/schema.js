// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import websites from "./websites";
import services from "./services";
import skills from "./skills";
import blockContent from "./blockContent";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by an+y plugins that are installed
  types: schemaTypes.concat([
    websites,
    services,
    skills,
    blockContent,
    /* Your types here! */
  ]),
});
