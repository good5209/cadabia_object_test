// constructor
function Oid(prefix, clazz, object) {
	// field
	this.prefix = prefix;
	this.class = clazz;
	this.object = object;
}

// method
Oid.prototype.getClass = function () {
	return this.class;
}

// export
Cadabia.Oid = Oid;
