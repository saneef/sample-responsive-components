// @ts-check

import { load } from "js-yaml";

const INPUT_DIR = "src";
const OUTPUT_DIR = "dist";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml", (contents) => load(contents));

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: { input: INPUT_DIR, output: OUTPUT_DIR },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
