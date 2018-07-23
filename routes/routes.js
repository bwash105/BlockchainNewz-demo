module.exports = function (app) {
    app.get ("/" , function (req, res) {
        res.render("home");
    });

    app.get ("/about" , function (req, res) {
        res.render("about");
    });

    app.get ("/blog" , function (req, res) {
        res.render("blog");
    });

    app.get ("/social" , function (req, res) {
        res.render("social");
    });

    app.get ("/contact" , function (req, res) {
        res.render("contact");
    });

    app.post ("/subscribe" , function (req, res) {
      var email = req.body.email
        res.render("subscribe", {email: email});
        console.log(req.body);
    });
}