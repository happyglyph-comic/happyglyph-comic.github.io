(function ($) {
    var app = $.sammy(function () {
        var self = this;

        self.get("#1", function () {
            console.log("1");
            $("#scene-1").removeClass("hidden");
        });

        self.get('', function () {
            console.log("root");
            $("#scene-1").addClass("hidden");
        });
    });

    $(function() {
        // run the app when the DOM is ready
        app.run();
    });

})(jQuery);