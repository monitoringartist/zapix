"use strict";

var jsonRpc = (function($) {
	var JSONRPCVersion = '2.0';

	var sessionid = null,
		hostname,
		id = 0,
        ajaxTime = 0,
        totalTime = 0;

	return {
		connect: function(host, user, pass, params) {
			hostname = host.replace(/\/+$/, '') + "/api_jsonrpc.php";

			params = params || {};
			if (typeof params.xdebugsid !== 'undefined') {
				hostname += '?XDEBUG_SESSION_START=' + params.xdebugsid;
			}
			try {
				this.call('username.login', {user: user, password: pass}, function(result) {
					sessionid = result;
					$('#connections').modal('hide');
					$("#connInfo").text('Connected to ' + config.host.replace('https://', '').replace('http://',''));
					jsonRpc.versioning();
				});
			}
			catch (e) {
				this.call('user.login', {user: user, password: pass}, function(result) {
					sessionid = result;
					$('#connections').modal('hide');
					$("#connInfo").text('Connected to ' + config.host.replace('https://', '').replace('http://',''));
					jsonRpc.versioning();
				});
			}
		},

		versioning: function() {
          this.call('apiinfo.version', [], function(result) {
              if (methods[result.substring(0, 3)] !== undefined) {
                zabbixVersion = result.substring(0, 3);
              }

             $("#apimethod").typeahead({
                hint: true,
                highlight: true,
                minLength: 1
              },
              {
                name: 'apimethods',
                limit: 14,
                source: substringMatcher(methods[zabbixVersion]),
              });

          });
    },

		call: function(method, params, onSuccess) {
			if (!sessionid && method != 'user.login') {
				alert('Connect to Zabbix first.');
				return false;
			}
			var request = {
				jsonrpc: JSONRPCVersion,
				method: method,
				id: id++,
				auth: sessionid
			};
			if (params !== '') {
				request['params'] = params;
			}
			if (method == 'apiinfo.version' || method == 'user.login') {
                delete request.auth;
			}
			request = JSON.stringify(request);

			$('#response, #request').empty();
			$('#request').html(request.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
            $('#execute').addClass('active', {duration:0});
            $('#responsetime').text("");
            ajaxTime= new Date().getTime();

			$.ajax({
				url: hostname,
				headers: {
					"Content-type": "application/json-rpc"
				},
				type: "POST",
				data: request,
				dataType: "text",
				success: function(result) {
                    totalTime = new Date().getTime() - ajaxTime;
                    $('#execute').removeClass('active', {duration:0});
					try {
						result = JSON.parse(result);
						$('#response').text(JSON.stringify(result, null, 4));
                        var suffix;
                        if (result.result.length !== 1) {
                            suffix = 's';
                        } else {
                            suffix = '';
                        }
                        $('#responsetime').text(" (" + totalTime/1000 + "s, " + result.result.length + " value" + suffix + " in the result array)");
						if (typeof result.result !== 'undefined') {
							if (typeof onSuccess !== 'undefined') {
								onSuccess(result.result);
							}
						}
						else {
							alert(result.error.data);
						}
					}
					catch (e) {
						if (respone.hasOwnProperty("error")) {
							$('#response').text(JSON.stringify(result, null, 4));
						} 
						else {						
							$('#response').html(result);
						}
						alert('Api response not in JSON format.');
					}
				},
				error: function(xhr) {
                    totalTime = new Date().getTime() - ajaxTime;
                    $('#execute').removeClass('active', {duration:0});
                    $('#responsetime').text(" (" + totalTime/1000 + "s)");
					alert(xhr.statusText);
				}
			});
		}
	};
}(jQuery));

    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };
