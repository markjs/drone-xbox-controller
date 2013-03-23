var fil = require("./image_filter.js");

if (process.argv.length == 2) {
    console.log("usage is node cli.js input_image output_image filter_name");
    console.log("filter name is one of: " + fil.ImageFilter.filter_names().join(" "));
} else {
    var input = process.argv[2];
    var output = process.argv[3];
    var filter = process.argv[4];
    var f = new fil.ImageFilter(filter);
    f.apply_filter(input, output, function(){});

}

