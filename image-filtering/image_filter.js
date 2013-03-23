var ImageFilter = function() {
    return function() {
        var im = require("imagemagick");
        var filter = "toast";

        this.filters = function() {
            return Object.keys(filters);
        }

        this.apply_filter = function(input_image_filename, output_image_filename, callback) {
            im.convert(make_command_string(input_image_filename, output_image_filename), callback)
        };

        var make_command_string = function(input_image_filename, output_image_filename) {
            var build = make_filter();
            build.unshift(input_image_filename);
            build.push(output_image_filename);
            return build;
        };

        var make_filter = function() {
            return ImageFilter.filter_function(filter)();
        };
    };
}();

ImageFilter._filters = {
    "toast": function() {
        return ["-modulate", "150,80,100", "-gamma", "1.2", "-contrast", "-contrast"]
    },
    "edgy": function() {
        return ["-blur", "2x4", "-gamma", "1.5"]
    }
};

ImageFilter.filter_names = function() {
    return Object.keys(ImageFilter._filters);
}

ImageFilter.filter_function = function(filter_name) {
    return ImageFilter._filters[filter_name];
}

exports.ImageFilter = ImageFilter
