var ErrorReports = {
    'log': function(scriptName, lineNr, errorText) {
        try {
            var postdata = 'location=' + encodeURIComponent(window.location.href) + '&script=' + encodeURIComponent(scriptName) + '&lineNr=' + lineNr + '&error=' + encodeURIComponent(errorText) + ((typeof deviceId != 'undefined') ? '&deviceId=' + deviceId : '') + ((typeof clientIp != 'undefined') ? '&clientID=' + encodeURIComponent(clientIp) : '');
            var XHR = new XMLHttpRequest();
            if (!prodUrl)
                var prodUrl = '/spielecenter';
            var XHRUrl = prodUrl + '/ajax/reportError.php';
            XHR.onreadystatechange = function() {
                if (XHR.readyState == 4) {}
            }
            XHR.open('POST', XHRUrl, true);
            XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            XHR.send(postdata);
        } catch (err) {
            console.warn(err);
        }
    }
}
{
    try {
        var gOldOnError = window.onerror;
        window.onerror = function myErrorHandler(errorMsg, url, lineNumber, columnNumber, error) {
            ErrorReports.log(url, lineNumber + ': ' + columnNumber, errorMsg + ' :: ' + error.stack);
            return false;
        }
    } catch (err) {}
}
