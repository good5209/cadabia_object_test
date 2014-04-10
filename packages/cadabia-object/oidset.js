// constructor
function OidSet(oids) {
	// field
	this.oids = oids;
}

// method
OidSet.prototype.getOids = function () {
	return this.oids;
}

// export
Cadabia.OidSet = OidSet;
