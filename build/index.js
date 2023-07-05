var handlebars = require('handlebars');
var fs = require('fs');

//decorate model and arrays
var model = require('../registry-master.json');
model.meta = require('../registry-metadata.json');
model.meta.date = new Date();

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
model.meta.contributors = model.meta.contributors.map(coerceStringValueToObject);

decorateArray(model.meta.keywords);
decorateArray(model.meta.contributors);
decorateArray(model.domain);
decorateArray(model.fhir.version);
model.domain.forEach(function(domain){
    decorateArray(domain.terminology);
    decorateArray(domain.identifier);
});

//define transforms
var transform = [
    {
        template: __dirname + '/templates/c-sharp/Registry.cs.template',
        output: __dirname + '/../c-sharp/Hl7.Uk.Fhir.Registry/Registry.cs'
    },
    {
        template: __dirname + '/templates/c-sharp/Registry.nuspec.template',
        output: __dirname + '/../c-sharp/Hl7.Uk.Fhir.Registry/Hl7.Uk.Fhir.Registry.nuspec'
    },
    {
        template: __dirname + '/templates/c-sharp/AssemblyInfo.cs.template',
        output: __dirname + '/../c-sharp/Hl7.Uk.Fhir.Registry/Properties/AssemblyInfo.cs'
    },
    {
        template: __dirname + '/templates/js/index.js.template',
        output: __dirname + '/../js/index.js'
    },
    {
        template: __dirname + '/templates/js/package.json.template',
        output: __dirname + '/../js/package.json'
    },
    {
        template: __dirname + '/templates/README.md.template',
        output: __dirname + '/../README.md'
    },
    {
        template: __dirname + '/templates/xml/registry.xml.template',
        output: __dirname + '/../xml/registry.xml'
    },
    {
        template: __dirname + '/templates/csv/registry.csv.template',
        output: __dirname + '/../csv/registry.csv'
    },
    {
        template: __dirname + '/templates/java/Registry.java.template',
        output: __dirname + '/../java/Registry.java'
    },
    {
        template: __dirname + '/templates/fhir/stu3/registry.json.template',
        output: __dirname + '/../fhir/stu3/registry.json'
    },
    {
        template: __dirname + '/templates/fsh/registry.fsh.template',
        output: __dirname + '/../fsh/registry.fsh'
    }
];

//render transforms
transform.forEach(function (transform) {
    var template = fs.readFileSync(transform.template, {encoding: 'utf8'});

    var compiledTemplate = handlebars.compile(template);

    var implementation = compiledTemplate(model);

    fs.writeFileSync(transform.output, implementation);
});
