
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico"); 
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_includes/_layouts",
      partials: "_includes/_partials",
      data: "_data",
    }
  }
  
};

