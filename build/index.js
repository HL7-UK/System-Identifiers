var model = require('../registry.json');
var mustache = require('mustache');
var fs = require('fs');

//decorate mode/
model.meta = {
    date: new Date(),
    copyright: 'Copyright © 2016+ HL7 UK',
    version: '0.0.1',
    description: 'HL7 UK FHIR system identifier registry',
    keywords: ['HL7', 'HL7 UK', 'FHIR', 'NHS']
};

model.domain.forEach(function(domain){
    function decorateArray(a){
        if (a){
            a[a.length - 1].last = true;
        }
    }

    decorateArray(domain.code);
    decorateArray(domain.identifier);
 });

//define transforms
var transform = [
    {
        template: __dirname + '/templates/registry.cs.template',
        output: __dirname + '/../c-sharp/registry.cs'
    },
    {
        template: __dirname + '/templates/registry.js.template',
        output: __dirname + '/../js/index.js'
    },
    {
        template: __dirname + '/templates/package.json.template',
        output: __dirname + '/../js/package.json'
    },
    {
        template: __dirname + '/templates/system.md.template',
        output: __dirname + '/../registry.md'
    }
];

//render transforms
transform.forEach(function (transform) {
    var template = fs.readFileSync(transform.template, {encoding: 'utf8'});

    var implementation = mustache.render(template, model);

    fs.writeFileSync(transform.output, implementation);
});
