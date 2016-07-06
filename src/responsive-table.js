var responsiveTable = (function () {
  var defaultSettings = {
    hideClass: 'rt-mobile-hide',
    separator: ' :'
  };

  function init(s){
    if(typeof s !== 'object') s = {}
    if(typeof s.hideClass == 'undefined') s.hideClass = defaultSettings.hideClass;
    if(typeof s.separator == 'undefined') s.separator = defaultSettings.separator;

    var tables = document.querySelectorAll('table.rt');
    Array.prototype.forEach.call(tables, function(table){
      var ths = table.querySelectorAll('thead th');
      var trs = table.querySelectorAll('tbody tr');
      var thsVal = [];

      Array.prototype.forEach.call(ths, function(th){
        var trim = th.textContent.trim();
        var v    = th.classList.contains(s.hideClass) || trim == '' ? '' : trim + s.separator;
        thsVal.push(v)
      });
      Array.prototype.forEach.call(trs, function(tr){
        var tds = tr.querySelectorAll('td');
        Array.prototype.forEach.call(tds, function(td, i){
          if(thsVal[i] != "") td.setAttribute('data-header', thsVal[i])
        });
      });
    });
  }

  return {
    init: init
  };
})()
