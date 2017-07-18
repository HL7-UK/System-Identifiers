var model = require('../registry-master.json');
var mustache = require('mustache');
var fs = require('fs');

//decorate model and arrays
model.meta = {
    date: new Date(),
    copyright: 'Copyright © 2016+ HL7 UK',
    version: '0.0.1',
    description: 'HL7 UK FHIR system identifier registry',
    keywords: ['HL7', 'UK', 'FHIR', 'NHS'],
    license: {
        name: 'Apache-2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0'
    },
    repo: {
        type: 'git',
        url: 'https://github.com/HL7-UK/System-Identifiers.git'
    }
};

function coerceStringValueToObject(s){
    return {
        value: s
    }
}

function decorateArray(a){
    if (a){
        a.forEach(function(obj, i){

            obj.last = false;
            if (i == a.length - 1){
                obj.last = true;
            }
        });
    }
}

model.meta.keywords = model.meta.keywords.map(coerceStringValueToObject);
decorateArray(model.meta.keywords);
decorateArray(model.domain);
model.domain.forEach(function(domain){
    decorateArray(domain.terminology);
    decorateArray(domain.identifier);
});

//define transforms
var transform = [
    {
        template: __dirname + '/templates/Registry.cs.template',
        output: __dirname + '/../c-sharp/org.uk.hl7.fhir.registry/Registry.cs'
    },
    {
        template: __dirname + '/templates/Registry.nuspec.template',
        output: __dirname + '/../c-sharp/org.uk.hl7.fhir.registry/HL7 UK FHIR Registry.nuspec'
    },
    {
        template: __dirname + '/templates/index.js.template',
        output: __dirname + '/../js/index.js'
    },
    {
        template: __dirname + '/templates/package.json.template',
        output: __dirname + '/../js/package.json'
    },
    {
        template: __dirname + '/templates/README.md.template',
        output: __dirname + '/../README.md'
    }
];

//render transforms
transform.forEach(function (transform) {
    var template = fs.readFileSync(transform.template, {encoding: 'utf8'});

    var implementation = mustache.render(template, model);

    fs.writeFileSync(transform.output, implementation);
});
