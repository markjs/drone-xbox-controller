var fil = require("./image_filter.js")

var ImageFilter = fil.ImageFilter;
var num_tests = ImageFilter.filter_names().length;
var passes = 0;

for (var name in ImageFilter.filter_names()) {
    f = new ImageFilter(name);

    f.apply_filter("sample.png", "out.png", function(out, err) {
        if (err == null || err == "") {
            passes += 1;
            process.stdout.write(".");
        } else {
            process.stdout.write("f");
        }
    });
}
