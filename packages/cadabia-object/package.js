Package.describe({
  summary: "Cadabia basic Data structure"
});

Package.on_use(function (api, where) {
  api.export('Cadabia');
  // base export variable
  api.add_files('cadabia-object.js', ['client', 'server']);
  // data structure class
  api.add_files('oid.js', ['client', 'server']);
  api.add_files('oidset.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('cadabia-object');

  api.add_files('cadabia-object_tests.js', ['client', 'server']);
});
