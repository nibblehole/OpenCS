const express = require('express');
const router = express.Router();

const helper = require("../helper");

router.get('/auth/login', function (req, res) {
    if(req.user) { res.redirect("/clientarea"); return; }

    const localeVar = req.query.locale || helper.locale;
    const vars = {
        page_title: helper.getLocale(localeVar).login,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/auth/login", vars);
});

router.get('/auth/register', function (req, res) {
    if(req.user) { res.redirect("/clientarea"); return; }

    const localeVar = req.query.locale || helper.locale;
    const vars = {
        page_title: helper.getLocale(localeVar).register,
        company_name: helper.companyName,
        company_email: helper.companyEmail,
        locale: localeVar,
        helper: helper
    };

    res.render(helper.theme + "/pages/auth/register", vars);
});


module.exports = router;