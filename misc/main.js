var mainContent = document.getElementById("main-content");
if (mainContent != null) {
  var contentDivs = mainContent.getElementsByClassName('content');
  if (contentDivs.length > 0) {
    var content = contentDivs[0];
    var links = content.getElementsByTagName('a');
    var href = "";
    for (var i=0; i<links.length; i++) {
      if (!links[i].hasAttribute("target")) {
        href = links[i].getAttribute("href");
        if (href != null && href.indexOf("/") != 0 && href.indexOf(location.origin) < 0 && href.indexOf('www.sac-accreditations.gov.sg') < 0) {
          links[i].setAttribute("target", "_blank");
        }
      }
    }
  }
}

