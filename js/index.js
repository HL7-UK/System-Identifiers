// HL7 UK FHIR Registry, Copyright © 2016+ HL7 UK
// Generated Mon Nov 27 2017 16:14:18 GMT+0000 (GMT)
module.exports = {
    fhir: {
        // DSTU 1 (Official version) with 2 technical errata
        DSTU1: "0.0.82",
        // DSTU 2 (Official version)
        DSTU2: "1.0.x",
        // FHIR Release 3 (STU)
        STU3: "3.0.x"
    },
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

            // The name of the job role in SDS.
            SDS_JOB_ROLE_NAME: "https://fhir.hl7.org.uk/CareConnect-SDSJobRoleName-1"

            
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
            NHS_NUMBER: "https://fhir.nhs.uk/Id/nhs-number",

            // ODS code to identify the organisation at organisation level
            ODS_ORGANIZATION_CODE: "https://fhir.nhs.uk/Id/ods-organization-code",

            // ODS Site code to identify the organisation at site level
            ODS_SITE_CODE: "https://fhir.nhs.uk/Id/ods-site-code",

            // The SDS identifier that uniquely identifies the person as this agent
            SDS_USER_ID: "https://fhir.nhs.uk/Id/sds-user-id",

            // The SDS identifier that uniquely identifies the role profile of the person as this agent
            SDS_ROLE_PROFILE_ID: "https://fhir.nhs.uk/Id/sds-role-profile-id"

            
        }
    }
};

// hl7uk-fhir-registry::index.js, Copyright © 2016+ HL7 UK