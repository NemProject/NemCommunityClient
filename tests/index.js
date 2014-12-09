define([
    'intern!bdd',
    'intern/chai!expect',
    'require'
], function(bdd, expect, require){

    bdd.describe('NCC', function(){

        bdd.it('index not found', function(){
            return this.remote
                .get(require.toUrl('index.html'))
                .text('body')
                .then(function(text){
                    expect(text).to.equal('404 Not Found');
                });
        });

    });

});