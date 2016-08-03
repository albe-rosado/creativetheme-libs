Package.describe({
  name: 'arosado:creativetheme-libs',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Adds Bootstrap Creative Theme 3rd party libraries to your Meteor App',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');
  api.mainModule('creativetheme-libs.js');
  // Styles
  api.addFiles(['css/creative.css', 'css/fonts.css', 'css/magnific-popup.css'], 'client');
  //Libraries
  api.addFiles([
      'js/custom.js',
      'js/creative.min.js',
      'js/jquery.min.js',
      'js/bootstrap.min.js'], 'client');


});
