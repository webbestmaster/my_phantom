var page = require('webpage').create();

page.viewportSize = {
    width: 480,
    height: 800
};

page.open('http://statlex.github.io', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});