module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addWatchTarget("./src/assets/");
	eleventyConfig.addPassthroughCopy("./src/portfolio/wamstorymaps/index.html");
    eleventyConfig.addPassthroughCopy("./src/portfolio/wamstorymaps/leaflet.js");
    eleventyConfig.addPassthroughCopy("./src/portfolio/wamstorymaps/patches.js");



    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
