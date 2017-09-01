function CConfig(){
  this.init();
}
var zabbixVersion = "3.4"
var methods = {
  "3.4": [
    "action.create",
    "action.delete",
    "action.get",
    "action.update",
    "alert.get",
    "apiinfo.version",
    "application.create",
    "application.delete",
    "application.get",
    "application.massadd",
    "application.update",
    "configuration.export",
    "configuration.import",
    "correlation.create",
    "correlation.delete",
    "correlation.get",
    "correlation.update",
    "dashboard.create",
    "dashboard.delete",
    "dashboard.get",
    "dashboard.update",
    "dhost.get",
    "dservice.get",
    "dcheck.get",
    "drule.create",
    "drule.delete",
    "drule.get",
    "drule.update",
    "event.acknowledge",
    "event.get",
    "graph.create",
    "graph.delete",
    "graph.get",
    "graph.update",
    "graphitem.get",
    "graphprototype.create",
    "graphprototype.delete",
    "graphprototype.get",
    "graphprototype.update",
    "history.get",
    "host.create",
    "host.delete",
    "host.get",
    "host.massadd",
    "host.massremove",
    "host.massupdate",
    "host.update",
    "hostgroup.create",
    "hostgroup.delete",
    "hostgroup.get",
    "hostgroup.massadd",
    "hostgroup.massremove",
    "hostgroup.massupdate",
    "hostgroup.update",
    "hostinterface.create",
    "hostinterface.delete",
    "hostinterface.get",
    "hostinterface.massadd",
    "hostinterface.massremove",
    "hostinterface.replacehostinterfaces",
    "hostinterface.update",
    "hostprototype.create",
    "hostprototype.delete",
    "hostprototype.get",
    "hostprototype.update",
    "iconmap.create",
    "iconmap.delete",
    "iconmap.get",
    "iconmap.update",
    "image.create",
    "image.delete",
    "image.get",
    "image.update",
    "item.create",
    "item.delete",
    "item.get",
    "item.update",
    "itemprototype.create",
    "itemprototype.delete",
    "itemprototype.get",
    "itemprototype.update",
    "service.adddependencies",
    "service.addtimes",
    "service.create",
    "service.delete",
    "service.deletedependencies",
    "service.deletetimes",
    "service.get",
    "service.getsla",
    "service.update",
    "discoveryrule.copy",
    "discoveryrule.create",
    "discoveryrule.delete",
    "discoveryrule.get",
    "discoveryrule.update",
    "maintenance.create",
    "maintenance.delete",
    "maintenance.get",
    "maintenance.update",
    "map.create",
    "map.delete",
    "map.get",
    "map.update",
    "usermedia.get",
    "mediatype.create",
    "mediatype.delete",
    "mediatype.get",
    "mediatype.update",
    "problem.get",
    "proxy.create",
    "proxy.delete",
    "proxy.get",
    "proxy.update",
    "screen.create",
    "screen.delete",
    "screen.get",
    "screen.update",
    "screenitem.create",
    "screenitem.delete",
    "screenitem.get",
    "screenitem.update",
    "screenitem.updatebyposition",
    "script.create",
    "script.delete",
    "script.execute",
    "script.get",
    "script.getscriptsbyhosts",
    "script.update",
    "template.create",
    "template.delete",
    "template.get",
    "template.massadd",
    "template.massremove",
    "template.massupdate",
    "template.update",
    "templatescreen.copy",
    "templatescreen.create",
    "templatescreen.delete",
    "templatescreen.get",
    "templatescreen.update",
    "templatescreenitem.get",
    "trend.get",
    "trigger.adddependencies",
    "trigger.deletedependencies",
    "trigger.create",
    "trigger.delete",
    "trigger.get",
    "trigger.update",
    "triggerprototype.create",
    "triggerprototype.delete",
    "triggerprototype.get",
    "triggerprototype.update",
    "user.addmedia",
    "user.create",
    "user.delete",
    "user.deletemedia",
    "user.get",
    "user.login",
    "user.logout",
    "user.update",
    "user.updatemedia",
    "user.updateprofile",
    "usergroup.create",
    "usergroup.delete",
    "usergroup.get",
    "usergroup.massadd",
    "usergroup.massupdate",
    "usergroup.update",
    "usermacro.create",
    "usermacro.createglobal",
    "usermacro.delete",
    "usermacro.deleteglobal",
    "usermacro.get",
    "usermacro.update",
    "usermacro.updateglobal",
    "valuemap.create",
    "valuemap.delete",
    "valuemap.get",
    "valuemap.update",
    "httptest.create",
    "httptest.delete",
    "httptest.get",
    "httptest.update"
  ],
  "3.2": [
    "action.create",
    "action.delete",
    "action.get",
    "action.update",
    "alert.get",
    "apiinfo.version",
    "application.create",
    "application.delete",
    "application.get",
    "application.massadd",
    "application.update",
    "configuration.export",
    "configuration.import",
    "correlation.create",
    "correlation.delete",
    "correlation.get",
    "correlation.update",
    "dhost.get",
    "dservice.get",
    "dcheck.get",
    "drule.create",
    "drule.delete",
    "drule.get",
    "drule.isreadable",
    "drule.iswritable",
    "drule.update",
    "event.acknowledge",
    "event.get",
    "graph.create",
    "graph.delete",
    "graph.get",
    "graph.update",
    "graphitem.get",
    "graphprototype.create",
    "graphprototype.delete",
    "graphprototype.get",
    "graphprototype.update",
    "history.get",
    "host.create",
    "host.delete",
    "host.get",
    "host.isreadable",
    "host.iswritable",
    "host.massadd",
    "host.massremove",
    "host.massupdate",
    "host.update",
    "hostgroup.create",
    "hostgroup.delete",
    "hostgroup.get",
    "hostgroup.isreadable",
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
    "hostinterface.replacehostinterfaces",
    "hostinterface.update",
    "hostprototype.create",
    "hostprototype.delete",
    "hostprototype.get",
    "hostprototype.isreadable",
    "hostprototype.iswritable",
    "hostprototype.update",
    "iconmap.create",
    "iconmap.delete",
    "iconmap.get",
    "iconmap.isreadable ",
    "iconmap.iswritable",
    "iconmap.update",
    "image.create",
    "image.delete",
    "image.get",
    "image.update",
    "item.create",
    "item.delete",
    "item.get",
    "item.isreadable",
    "item.iswritable",
    "item.update",
    "itemprototype.create",
    "itemprototype.delete",
    "itemprototype.get",
    "itemprototype.isreadable",
    "itemprototype.iswritable",
    "itemprototype.update",
    "service.adddependencies",
    "service.addtimes",
    "service.create",
    "service.delete",
    "service.deletedependencies",
    "service.deletetimes",
    "service.get",
    "service.getsla",
    "service.isreadable",
    "service.iswritable",
    "service.update",
    "discoveryrule.copy",
    "discoveryrule.create",
    "discoveryrule.delete",
    "discoveryrule.get",
    "discoveryrule.isreadable",
    "discoveryrule.iswritable",
    "discoveryrule.update",
    "maintenance.create",
    "maintenance.delete",
    "maintenance.get",
    "maintenance.update",
    "map.create",
    "map.delete",
    "map.get",
    "map.isreadable",
    "map.iswritable",
    "map.update",
    "usermedia.get",
    "mediatype.create",
    "mediatype.delete",
    "mediatype.get",
    "mediatype.update",
    "problem.get",
    "proxy.create",
    "proxy.delete",
    "proxy.get",
    "proxy.isreadable",
    "proxy.iswritable",
    "proxy.update",
    "screen.create",
    "screen.delete",
    "screen.get",
    "screen.update",
    "screenitem.create",
    "screenitem.delete",
    "screenitem.get",
    "screenitem.isreadable",
    "screenitem.iswritable",
    "screenitem.update",
    "screenitem.updatebyposition",
    "script.create",
    "script.delete",
    "script.execute",
    "script.get",
    "script.getscriptsbyhosts",
    "script.update",
    "template.create",
    "template.delete",
    "template.get",
    "template.isreadable",
    "template.iswritable",
    "template.massadd",
    "template.massremove",
    "template.massupdate",
    "template.update",
    "templatescreen.copy",
    "templatescreen.create",
    "templatescreen.delete",
    "templatescreen.get",
    "templatescreen.isreadable",
    "templatescreen.iswritable",
    "templatescreen.update",
    "templatescreenitem.get",
    "trend.get",
    "trigger.adddependencies",
    "trigger.deletedependencies",
    "trigger.create",
    "trigger.delete",
    "trigger.get",
    "trigger.isreadable",
    "trigger.iswritable",
    "trigger.update",
    "triggerprototype.create",
    "triggerprototype.delete",
    "triggerprototype.get",
    "triggerprototype.update",
    "user.addmedia",
    "user.create",
    "user.delete",
    "user.deletemedia",
    "user.get",
    "user.isreadable",
    "user.iswritable",
    "user.login",
    "user.logout",
    "user.update",
    "user.updatemedia",
    "user.updateprofile",
    "usergroup.create",
    "usergroup.delete",
    "usergroup.get",
    "usergroup.isreadable",
    "usergroup.iswritable",
    "usergroup.massadd",
    "usergroup.massupdate",
    "usergroup.update",
    "usermacro.create",
    "usermacro.createglobal",
    "usermacro.delete",
    "usermacro.deleteglobal",
    "usermacro.get",
    "usermacro.update",
    "usermacro.updateglobal",
    "valuemap.create",
    "valuemap.delete",
    "valuemap.get",
    "valuemap.update",
    "httptest.create",
    "httptest.delete",
    "httptest.get",
    "httptest.isreadable",
    "httptest.iswritable",
    "httptest.update"
  ],
  "3.0": [
    "action.create",
    "action.delete",
    "action.get",
    "action.update",
    "alert.get",
    "apiinfo.version",
    "application.create",
    "application.delete",
    "application.get",
    "application.massadd",
    "application.update",
    "configuration.export",
    "configuration.import",
    "dhost.get",
    "dservice.get",
    "dcheck.get",
    "drule.create",
    "drule.delete",
    "drule.get",
    "drule.isreadable",
    "drule.iswritable",
    "drule.update",
    "event.acknowledge",
    "event.get",
    "graph.create",
    "graph.delete",
    "graph.get",
    "graph.update",
    "graphitem.get",
    "graphprototype.create",
    "graphprototype.delete",
    "graphprototype.get",
    "graphprototype.update",
    "history.get",
    "host.create",
    "host.delete",
    "host.get",
    "host.isreadable",
    "host.iswritable",
    "host.massadd",
    "host.massremove",
    "host.massupdate",
    "host.update",
    "hostgroup.create",
    "hostgroup.delete",
    "hostgroup.get",
    "hostgroup.isreadable",
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
    "hostinterface.replacehostinterfaces",
    "hostinterface.update",
    "hostprototype.create",
    "hostprototype.delete",
    "hostprototype.get",
    "hostprototype.isreadable",
    "hostprototype.iswritable",
    "hostprototype.update",
    "iconmap.create",
    "iconmap.delete",
    "iconmap.get",
    "iconmap.isreadable ",
    "iconmap.iswritable",
    "iconmap.update",
    "image.create",
    "image.delete",
    "image.get",
    "image.update",
    "item.create",
    "item.delete",
    "item.get",
    "item.isreadable",
    "item.iswritable",
    "item.update",
    "itemprototype.create",
    "itemprototype.delete",
    "itemprototype.get",
    "itemprototype.isreadable",
    "itemprototype.iswritable",
    "itemprototype.update",
    "service.adddependencies",
    "service.addtimes",
    "service.create",
    "service.delete",
    "service.deletedependencies",
    "service.deletetimes",
    "service.get",
    "service.getsla",
    "service.isreadable",
    "service.iswritable",
    "service.update",
    "discoveryrule.copy",
    "discoveryrule.create",
    "discoveryrule.delete",
    "discoveryrule.get",
    "discoveryrule.isreadable",
    "discoveryrule.iswritable",
    "discoveryrule.update",
    "maintenance.create",
    "maintenance.delete",
    "maintenance.get",
    "maintenance.update",
    "map.create",
    "map.delete",
    "map.get",
    "map.isreadable",
    "map.iswritable",
    "map.update",
    "usermedia.get",
    "mediatype.create",
    "mediatype.delete",
    "mediatype.get",
    "mediatype.update",
    "proxy.create",
    "proxy.delete",
    "proxy.get",
    "proxy.isreadable",
    "proxy.iswritable",
    "proxy.update",
    "screen.create",
    "screen.delete",
    "screen.get",
    "screen.update",
    "screenitem.create",
    "screenitem.delete",
    "screenitem.get",
    "screenitem.isreadable",
    "screenitem.iswritable",
    "screenitem.update",
    "screenitem.updatebyposition",
    "script.create",
    "script.delete",
    "script.execute",
    "script.get",
    "script.getscriptsbyhosts",
    "script.update",
    "template.create",
    "template.delete",
    "template.get",
    "template.isreadable",
    "template.iswritable",
    "template.massadd",
    "template.massremove",
    "template.massupdate",
    "template.update",
    "templatescreen.copy",
    "templatescreen.create",
    "templatescreen.delete",
    "templatescreen.get",
    "templatescreen.isreadable",
    "templatescreen.iswritable",
    "templatescreen.update",
    "templatescreenitem.get",
    "trend.get",
    "trigger.adddependencies",
    "trigger.deletedependencies",
    "trigger.create",
    "trigger.delete",
    "trigger.get",
    "trigger.isreadable",
    "trigger.iswritable",
    "trigger.update",
    "triggerprototype.create",
    "triggerprototype.delete",
    "triggerprototype.get",
    "triggerprototype.update",
    "user.addmedia",
    "user.create",
    "user.delete",
    "user.deletemedia",
    "user.get",
    "user.isreadable",
    "user.iswritable",
    "user.login",
    "user.logout",
    "user.update",
    "user.updatemedia",
    "user.updateprofile",
    "usergroup.create",
    "usergroup.delete",
    "usergroup.get",
    "usergroup.isreadable",
    "usergroup.iswritable",
    "usergroup.massadd",
    "usergroup.massupdate",
    "usergroup.update",
    "usermacro.create",
    "usermacro.createglobal",
    "usermacro.delete",
    "usermacro.deleteglobal",
    "usermacro.get",
    "usermacro.update",
    "usermacro.updateglobal",
    "valuemap.create",
    "valuemap.delete",
    "valuemap.get",
    "valuemap.update",
    "httptest.create",
    "httptest.delete",
    "httptest.get",
    "httptest.isreadable",
    "httptest.iswritable",
    "httptest.update"
  ]
};

CConfig.prototype = {
	connections: {},
	host: '',
	login: '',
	password: '',
	auth: '',
	ace: {},

	init: function(){
		this.connections = JSON.parse(localStorage.getItem('connections')) || {};

		this.ace = ace.edit("apiparams");
		this.ace.getSession().setMode("ace/mode/json");

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
    if (location.protocol == "http:") {
       $('#httpsli').show();
    }

    new Clipboard('.btncpy');

    $('#https').click(function() {
       if (location.protocol == "http:") {
         $('#https').attr("href", "https://" + window.location.host + window.location.pathname);
       } else {
         return false;
       }
    });
    
    $('#loadMe').click(function (e) {
    if ($('#load').css('display') == 'none') {
        var docUrl = "https://www.zabbix.com/documentation/" + zabbixVersion + "/manual/api/reference/" + $('#apimethod').val().replace('.','/')
        if ($("#load").attr("src") != docUrl) {
            $("#load").attr("src", docUrl);
        }
        $('#load').show();
    } else {
       $('#load').hide();
    }
    });

	config = new CConfig();
	ace = config.ace;

	$('#saveRequest').click(function() {
		$('#saveRequestMethod').val($('#apimethod').val());
		$('#saveRequestParams').val(ace.getValue());
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
        testOnly();
        paramsUpdate();
		var params;
		try {
			params = ace.getValue();
			if (params !== '') {
				params = JSON.parse(ace.getValue());
			}
			jsonRpc.call($('#apimethod').val(), params);
		}
		catch(e) {
			//alert(e);
		}
	});

    function testOnly(){
        if (ace.getValue() == '') {
            $('#apiparams').parent().removeClass('error');
            $('#testResult').hide();
            return true;
        }
        lint = window.JSONLint( ace.getValue(), { comments: false } );

        if ( ! lint.error ) {
			$('#apiparams').parent().removeClass('error');
            $('#testResult').hide();
		}
		else {
			$('#apiparams').parent().addClass('error');
            $('#response, #request').empty();
            $('#responsetime').text("");
            $('#testResult').show();
            $('#testResult').html([
				lint.error + "<br>" +
				"<b>Evidence:</b> " + lint.evidence + "<br>" +
				"<b>Line:</b> " + lint.line + "<br>" +
				"<b>Character:</b> " + lint.character
			].join(''));
		}
    }

    function paramsUpdate() {
        location.hash = 'apimethod=' + encodeURIComponent($('#apimethod').val()) + '&apiparams=' + encodeURIComponent(ace.getValue());
    }

    $('#compressJSON').click(function(){
        var params;
        params = JSON.parse(ace.getValue());
        ace.setValue(JSON.stringify(params, null, null));
        paramsUpdate();
    });

	$('#formatJSON').click(function(){
		var params;
        if (ace.getValue() == '') {
            $('#apiparams').parent().removeClass('error');
            $('#testResult').hide();
            return true;
        }
        lint = window.JSONLint( ace.getValue(), { comments: false } );
        if ( ! lint.error ) {
			$('#apiparams').parent().removeClass('error');
            $('#response, #request').empty();
            $('#responsetime').text("");
            $('#testResult').hide();
    	    try {
                params = JSON.parse(ace.getValue());
                ace.setValue(JSON.stringify(params, null, 4));
                paramsUpdate();
    		}
    		catch(e) {
    			alert(e);
    		}
		}
		else {
			$('#apiparams').parent().addClass('error');
            $('#testResult').show();
            $('#testResult').html([
				lint.error + "<br>" +
				"<b>Evidence:</b> " + lint.evidence + "<br>" +
				"<b>Line:</b> " + lint.line + "<br>" +
				"<b>Character:</b> " + lint.character
			].join(''));
		}
	});

    if (location.hash.length) {
        var prms = getHashParams();
        if ('apimethod' in prms) {
            $('#apimethod').val(prms['apimethod']);
        }
        if ('apiparams' in prms) {
            $('#apiparams').val(prms['apiparams']);
        }
    }
    
    if (methods[zabbixVersion].indexOf($('#apimethod').val()) > -1 ) {
        $('#loadMe').removeClass('disabled');
    } else {
        $('#loadMe').addClass('disabled');
    }    
});

$(document).on('search keyup change typeahead:selected typeahead:autocompleted', '#apimethod', function () {
    var prms = getHashParams();
    var hash = '';
    delete prms['apimethod'];
    $.each( prms, function( key, value ) {
        hash = key + "=" + encodeURIComponent(value) + '&';
    });
    location.hash = 'apimethod=' + encodeURIComponent($(this).val()) + '&' + hash;
    if (methods[zabbixVersion].indexOf($(this).val()) > -1 ) {
        $('#loadMe').removeClass('disabled');
    } else {
        $('#loadMe').addClass('disabled');
    }
})

$(document).on('search keyup change', '#apiparams', function () {
    var prms = getHashParams();
    var hash = '';
    delete prms['apiparams'];
    $.each( prms, function( key, value ) {
        hash = key + "=" + encodeURIComponent(value) + '&';
    });
    location.hash = hash + 'apiparams=' + encodeURIComponent($(this).val().replace("\\","\\\\"));
})

function getHashParams() {
    var hashParams = {};
    var e,
        a = /\+/g,  //Regex for replacing addition symbol with a space
        r = /([^&;=]+)=?([^&;]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.hash.substring(1);
    while (e = r.exec(q))
       hashParams[d(e[1])] = d(e[2]);
    return hashParams;
}
