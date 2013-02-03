self.port.on('update', function (domain) {
  var domain_span = document.getElementById('website_domain');
  domain_span.innerHTML = domain;
});