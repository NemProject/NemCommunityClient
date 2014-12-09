var
    http = require('http'), server,
    mock = require('mockserver'),
    path = require('path'),
    exec = require('child_process').spawn,
    seleniumStandalone = require('selenium-standalone'),
    seleniunLogs = require('fs').createWriteStream('./selenium-logs.txt')
    ;

server = http.createServer(mock('./tests/fixtures/http/')).listen(9001, function(){
    var selenium = seleniumStandalone({
        stdio: null
    }, {
        port: 4444,
        host: '127.0.0.1'
    });

    selenium.stderr.pipe(seleniunLogs);

    var intern = exec('node', [require.resolve('intern/bin/intern-runner'), 'config=tests/intern'], {
        cwd: process.cwd(),
        env: process.env,
        stdio: null
    });

    intern.on('close', function(code){
        server.close();
        process.exit(code);
    });

    intern.stderr.on('data', function(data){
        console.log(data.toString());
    });

    intern.stdout.pipe(process.stdout);

});
