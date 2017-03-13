$( function() {
    $( "#progressbar" ).progressbar({
      value: false
    });
    $( "#progressbar1" ).progressbar({
      value: false
    });
    $( "#progressbar2" ).progressbar({
      value: false
    });
  });
  
$(function() {
    var pGress = setInterval(function() {
        var pVal = $('#progressbar').progressbar('option', 'value');
        var pCnt = !isNaN(pVal) ? (pVal + 1) : 1;
        if (pCnt > 98) {
            clearInterval(pGress);
        } else {
            $('#progressbar').progressbar({value: pCnt});
        }
    },10);
});
$(function() {
    var pGress = setInterval(function() {
        var pVal = $('#progressbar1').progressbar('option', 'value');
        var pCnt = !isNaN(pVal) ? (pVal + 1) : 1;
        if (pCnt > 60) {
            clearInterval(pGress);
        } else {
            $('#progressbar1').progressbar({value: pCnt});
        }
    },10);
});
$(function() {
    var pGress = setInterval(function() {
        var pVal = $('#progressbar2').progressbar('option', 'value');
        var pCnt = !isNaN(pVal) ? (pVal + 1) : 1;
        if (pCnt > 40) {
            clearInterval(pGress);
        } else {
            $('#progressbar2').progressbar({value: pCnt});
        }
    },10);
});