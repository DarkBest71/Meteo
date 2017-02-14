var action = function(data, callback, config, SARAH){ 

  // Retrieve config
  config = config.modules.meteo;
  if (!config.zip){
    console.log("Missing Meteo config");
    callback({'tts' : 'Zip code invalide'});
    return;
  }
  
  var url = 'http://mobile.meteofrance.com/france/ville/'+(data.zip || config.zip);
  var request = require('request');
  request({ 'uri' : url }, function (err, response, body){
  
    if (err || response.statusCode != 200) {
      callback({'tts': "L'action a échoué"});
      return;
    }

    last = scrap(body, data.date || config.date);
    callback(last);
  });
}
exports.action = action;

// ==========================================
//  INIT
// ==========================================

var last = false;
exports.last = function(){  
  if (!last){
    action({}, function(){}, SARAH.ConfigManager.getConfig(), SARAH);
  }
  return last; 
};

var SARAH = false;
exports.init = function(bot){ SARAH = bot; }

// ==========================================
//  SCRAP
// ==========================================

var scrap = function(body, date){
  var $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: false });
  var json = { tts : 'Météo: '};
  
  json.place = $('#prevision > H2').text();      // Place
  json.tts  += json.place + ": ";
  
  var tr = $('#prevision table.prevSem1 tr');
  var td = $(tr[date]).find('td');
  
  json.temp = $(td[2]).text()                    // Temperature
  json.sun  = $(td[1]).find('img').attr('alt')   // Sun
  
  json.tts += $(td[0]).text() + ', ';            // Days 
  json.tts += json.sun + ', ' + json.temp + ', ';
 
  return json;
}
