if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to cadabia_object.";
  };

  Template.hello.events({
    'click #oid_test' : function () {
		var oid = new Cadabia.Oid("prefix", "class", "object");
		Meteor.call('printOid', oid);
		
		var oidset = new Cadabia.OidSet([oid]);
		Meteor.call('printOidSet', oidset);
	}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
	// code to run on server at startup
	  var oid = new Cadabia.Oid("prefix", "class", "object");
	  console.log("startup oid:");
	  console.log(oid);
  });
	Meteor.methods({
		printOid: function (oid) {
			console.log("print oid:");
			console.log(oid);
			console.log(oid.prefix);
			console.log(oid.class);
			console.log(oid.object);
		},
		printOidSet: function (oidset) {
			console.log("print oidset:");
			console.log(oidset);
			console.log(oidset.oids);
		}
	});
}
