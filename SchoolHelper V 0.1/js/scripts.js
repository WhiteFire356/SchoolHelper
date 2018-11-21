
$(document).ready(function(){

  $('#calc').click(function(){

    window.location.href = 'calculator.html';

  });

  $('#graph').click(function(){

    chrome.tabs.create({ url : 'https://www.desmos.com/calculator'});

  });

  $('#back').click(function(){

    window.location.href = 'popup.html';

  });

});
