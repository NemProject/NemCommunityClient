var
    http = require('http'), server,
    mock = require('mockserver'),
    path = require('path'),
    exec = require('child_process').spawn,
    seleniumStandalone = require('selenium-standalone'),
    seleniunLogs = require('fs').createWriteStream('./selenium-logs.txt'),
    handleMocks = mock('./tests/fixtures/http/'),
    webapp = path.join('nem-client-api','src','main','webapp'),
    serveStatic = require('serve-static')(webapp)
    ;

server = http.createServer(function(req, res){
    serveStatic(req, res, function(){
        handleMocks(req, res);
    });
}).listen(8989, function(){
    console.log('Started mock server on http://127.0.0.1:8989');

    process.on('SIGINT', function(){
        try {
            server.close();
            process.exit();
        } catch (e) { }
    });

    if (!process.env.TEST_MOCK) {

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

    }
});
