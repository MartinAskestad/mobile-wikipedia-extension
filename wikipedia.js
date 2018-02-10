var regex = /([a-z]{2}).wikipedia.org\/(.*?)$/;
if (document.location.href.match(regex)) {
    var mobileurl = document.location.href.replace(regex, '$1.m.wikipedia.org/$2');
    document.location.replace(mobileurl);
}
