function CConfig(){
	this.init();
}
CConfig.prototype = {
	connections: {},
	host: '',
	login: '',
	password: '',
	auth: '',

	init: function(){
		this.connections = JSON.parse(localStorage.getItem('connections')) || {};

		var that = this;
		$('#host').change(function(){
			that.host = this.value;
		});
		$('#login').change(function(){
			that.login = this.value;
		});
		$('#password').change(function(){
			that.password = this.value;
		});
		$('#connAdd').click(function(){
			that.addConnection();
		});
		$('#connList').change(function(){
			that.loadConnection($('#connList').val());
		});
		$('#connRemove').click(function(){
			that.removeConnection();
		});
		this.syncConnectionsList();
	},

	addConnection: function(){
		this.connections[this.host] = {
			host: this.host,
			login: this.login,
			password: this.password
		};
		localStorage.setItem('connections', JSON.stringify(this.connections));

		this.syncConnectionsList();
	},
	removeConnection: function(){
		delete this.connections[$('#connList').val()];

		localStorage.setItem('connections', JSON.stringify(this.connections));

		this.syncConnectionsList();
	},
	loadConnection: function(host){
		this.host = this.connections[host].host;
		this.login = this.connections[host].login;
		this.password = this.connections[host].password;

		this.syncConnectionsConfig();
	},

	syncConnectionsList: function(){
		$('#connList').empty();
		for(var key in this.connections){
			$('#connList').append(new Option(this.connections[key].host, this.connections[key].host));
		}
	},
	syncConnectionsConfig: function(){
		$('#host').val(this.host);
		$('#login').val(this.login);
		$('#password').val(this.password);
	}
};

$(document).ready(function() {
	config = new CConfig();

	$('#saveRequest').click(function() {
		$('#saveRequestMethod').val($('#apimethod').val());
		$('#saveRequestParams').val($('#apiparams').val());
	});

	$('#saveRequestOk').click(function() {
		var request = {
				name: $('#saveRequestName').val(),
				method: $('#saveRequestMethod').val(),
				params: $('#saveRequestParams').val()
			},
			requests = JSON.parse(localStorage.getItem('requests')) || {};

		requests[request.name] = request;

		localStorage.setItem('requests', JSON.stringify(requests));

		$('#saveRequestModal').modal('hide');
	});


	$('#loadRequest').click(function() {
		var requests = JSON.parse(localStorage.getItem('requests')) || {};
		$('#savedRequests').empty();
		for (var name in requests) {
			$('#savedRequests').append(new Option(name, name));
		}
	});

	$('#loadRequestOk').click(function() {
		var request,
			requests = JSON.parse(localStorage.getItem('requests')) || {};

		if ($('#savedRequests').val()) {
			request = requests[$('#savedRequests').val()];
			$('#apimethod').val(request.method);
			$('#apiparams').val(request.params);
		}

		$('#loadRequestModal').modal('hide');
	});

	$('#removeSavedRequest').click(function() {
		var requests = JSON.parse(localStorage.getItem('requests')) || {};

		delete requests[$('#savedRequests').val()];
		localStorage.setItem('requests', JSON.stringify(requests));

		$('#savedRequests').empty();
		for(var name in requests){
			$('#savedRequests').append(new Option(name, name));
		}
	});


	$('#loginButton').click(function() {
		jsonRpc.connect(config.host, config.login, config.password);
	});

	$('#execute').click(function() {
		var params;
		try {
			params = $('#apiparams').val();
			if (params !== '') {
				params = JSON.parse($('#apiparams').val());
			}
			jsonRpc.call($('#apimethod').val(), params);
		}
		catch(e) {
			alert(e);
		}
	});

	$('#formatJSON').click(function(){
		var params;
		try {
			params = JSON.parse($('#apiparams').val());
			$('#apiparams').val(JSON.stringify(params, null, 4));
		}
		catch(e) {
			alert(e);
		}
	});

	$('#apimethod').typeahead({
		source: ["action.create",
			"action.delete",
			"action.get",
			"action.update",
			"action.validateoperations",
			"alert.get",
			"application.create",
			"application.delete",
			"application.get",
			"application.massadd",
			"application.synctemplates",
			"application.update",
			"dcheck.get",
			"dhost.get",
			"discoveryrule.create",
			"discoveryrule.delete",
			"discoveryrule.get",
			"discoveryrule.synctemplates",
			"discoveryrule.update",
			"drule.create",
			"drule.get",
			"drule.update",
			"dservice.get",
			"event.acknowledge",
			"event.create",
			"event.get",
			"graph.create",
			"graph.delete",
			"graph.exists",
			"graph.get",
			"graph.getobjects",
			"graphitem.get",
			"graphprototype.create",
			"graphprototype.delete",
			"graphprototype.get",
			"graphprototype.synctemplates",
			"graphprototype.update",
			"graph.synctemplates",
			"graph.update",
			"history.get",
			"host.create",
			"host.delete",
			"host.exists",
			"host.get",
			"host.getobjects",
			"hostgroup.create",
			"hostgroup.delete",
			"hostgroup.exists",
			"hostgroup.get",
			"hostgroup.getobjects",
			"hostgroup.iswritable",
			"hostgroup.massadd",
			"hostgroup.massremove",
			"hostgroup.massupdate",
			"hostgroup.update",
			"hostinterface.create",
			"hostinterface.delete",
			"hostinterface.get",
			"hostinterface.massadd",
			"hostinterface.massremove",
			"hostinterface.update",
			"host.iswritable",
			"host.massadd",
			"host.massupdate",
			"host.update",
			"image.create",
			"image.delete",
			"image.exists",
			"image.get",
			"image.update",
			"item.create",
			"item.delete",
			"item.exists",
			"item.get",
			"item.getobjects",
			"itemprototype.create",
			"itemprototype.delete",
			"itemprototype.get",
			"itemprototype.synctemplates",
			"itemprototype.update",
			"item.synctemplates",
			"item.update",
			"maintenance.create",
			"maintenance.delete",
			"maintenance.get",
			"maintenance.update",
			"map.create",
			"map.delete",
			"map.exists",
			"map.get",
			"map.getobjects",
			"map.update",
			"mediatype.create",
			"mediatype.delete",
			"mediatype.get",
			"mediatype.update",
			"proxy.create",
			"proxy.delete",
			"proxy.get",
			"proxy.update",
			"screen.create",
			"screen.delete",
			"screen.exists",
			"screen.get",
			"screen.update",
			"script.create",
			"script.delete",
			"script.execute",
			"script.get",
			"script.getscriptsbyhosts",
			"script.update",
			"template.create",
			"template.delete",
			"template.exists",
			"template.get",
			"template.getobjects",
			"template.isreadable",
			"template.iswritable",
			"template.massadd",
			"template.massremove",
			"template.massupdate",
			"templatescreen.create",
			"templatescreen.delete",
			"templatescreen.get",
			"templatescreen.update",
			"template.unlink",
			"template.update",
			"trigger.adddependencies",
			"trigger.deletedependencies",
			"trigger.create",
			"trigger.delete",
			"trigger.exists",
			"trigger.get",
			"trigger.getobjects",
			"trigger.iswritable",
			"triggerprototype.create",
			"triggerprototype.delete",
			"triggerprototype.get",
			"triggerprototype.synctemplates",
			"triggerprototype.update",
			"trigger.synctemplates",
			"trigger.update",
			"user.checkauthentication",
			"user.create",
			"user.delete",
			"user.get",
			"usergroup.create",
			"usergroup.delete",
			"usergroup.get",
			"usergroup.isreadable",
			"usergroup.update",
			"user.isreadable",
			"user.ldaplogin",
			"user.login",
			"user.logout",
			"usermacro.createglobal",
			"usermacro.deleteglobal",
			"usermacro.get",
			"usermacro.getmacros",
			"usermacro.massadd",
			"usermacro.massremove",
			"usermacro.massupdate",
			"usermacro.resolveitem",
			"usermacro.resolvetrigger",
			"usermacro.updateglobal",
			"usermedia.get",
			"user.reseterrors",
			"user.update",
			"user.updatemedia",
			"user.updateprofile",
			"webcheck.create",
			"webcheck.delete",
			"webcheck.update"
		]
	});

});
