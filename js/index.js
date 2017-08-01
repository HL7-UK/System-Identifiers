// HL7 UK FHIR Registry, Copyright © 2016+ HL7 UK
// Generated Tue Aug 01 2017 13:50:16 GMT+0100 (BST)
module.exports = {
    International: {
        terminology: {
            // SNOMED CT
            SNOMED_CT: "http://snomed.info/sct"

            
        },
        identifier: {
            //None defined
        }
    },
    Uk: {
        terminology: {
            // Read Codes version 2
            READ_V2: "http://read.info/readv2",

            // Read Codes version 3
            READ_CTV3: "http://read.info/ctv3",

            // NHS number verification status. Codes from NHS Data Dictionary: NHS Number Status Indicator Code.
            NHS_NUMBER_VERIFICATION_STATUS: "https://fhir.hl7.org.uk/CareConnect-NHSNumberVerificationStatus-1",

            // The ethnic category which the patient regards as their own. It is an extension of the ETHNIC CATEGORY CODE described in the NHS Data Model and Dictionary for England.
            ETHNIC_CATEGORY: "https://fhir.hl7.org.uk/CareConnect-EthnicCategory-1",

            // The kind of organization that this is.
            ORGANISATION_TYPE: "https://fhir.hl7.org.uk/ValueSet/organisation-type-1",

            // The name of the job role in SDS.
            SDS_JOB_ROLE_NAME: "https://fhir-test.hl7.org.uk/CareConnect-SDSJobRoleName-1"

            
        },
        identifier: {
            //None defined
        }
    },
    Nhs: {
        terminology: {
            //None defined
        },
        identifier: {
            // The NHS Number identifier for a patient
            NHS_NUMBER: "http://fhir.nhs.uk/Id/nhs-number",

            // ODS code to identify the organisation at organisation level
            ODS_ORGANIZATION_CODE: "http://fhir.nhs.uk/Id/ods-organization-code",

            // ODS Site code to identify the organisation at site level
            ODS_SITE_CODE: "http://fhir.nhs.uk/Id/ods-site-code",

            // The SDS identifier that uniquely identifies the person as this agent
            SDS_USER_ID: "http://fhir.nhs.uk/Id/sds-user-id",

            // The SDS identifier that uniquely identifies the role profile of the person as this agent
            SDS_ROLE_PROFILE_ID: "http://fhir.nhs.uk/Id/sds-role-profile-id"

            
        }
    }
};

// hl7uk-fhir-registry::index.js, Copyright © 2016+ HL7 UK