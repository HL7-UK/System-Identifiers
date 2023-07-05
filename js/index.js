// HL7 UK FHIR Registry, Copyright © 2016+ HL7 UK
// Generated Wed Jul 05 2023 10:52:37 GMT+0100 (British Summer Time)
module.exports = {
    fhir: {
        // DSTU 1 (Official version) with 2 technical errata
        DSTU1: "0.0.82",
        // DSTU 2 (Official version)
        DSTU2: "1.0.x",
        // FHIR Release 3 (STU)
        STU3: "3.0.x",
        // FHIR Release 4
        R4: "4.0.x"
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
            SDS_JOB_ROLE_NAME: "https://fhir.hl7.org.uk/CareConnect-SDSJobRoleName-1",

            // EMIS drug codes
            EMIS_DRUG: "https://fhir.hl7.org.uk/Id/emis-drug-codes",

            // Egton codes
            EGTON: "https://fhir.hl7.org.uk/Id/egton-codes",

            // Multilex drug codes
            MULTILEX_DRUG: "https://fhir.hl7.org.uk/Id/multilex-drug-codes",

            // Gemscript drug codes
            GEMSCRIPT_DRUG: "https://fhir.hl7.org.uk/Id/resipuk-gemscript-drug-codes",

            // BNF drug codes
            BNF_DRUG: "https://fhir.hl7.org.uk/Id/bnf-drug-codes"

            
        },
        identifier: {
            // General Medical Council (GMC) number
            GMC_NUMBER: "https://fhir.hl7.org.uk/Id/gmc-number",

            // General Practitioner (GMP) number
            GMP_NUMBER: "https://fhir.hl7.org.uk/Id/gmp-number",

            // General Dental Council (GDC) number
            GDC_NUMBER: "https://fhir.hl7.org.uk/Id/gdc-number",

            // Nursing and Midwifery Council (NMC) number
            NMC_NUMBER: "https://fhir.hl7.org.uk/Id/nmc-number",

            // Health and Care Professions Council (HCPC) number
            HCPC_NUMBER: "https://fhir.hl7.org.uk/Id/hcpc-number",

            // General National Codes
            GNC_CODE: "https://fhir.hl7.org.uk/Id/gnc-codes",

            // Department for Education School number
            SCHOOL_NUMBER: "https://fhir.hl7.org.uk/Id/urn-school-number",

            // Prescription Pricing Authority (PPA) number
            PPA_NUMBER: "https://fhir.hl7.org.uk/Id/ppa-number"

            
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
            SDS_ROLE_PROFILE_ID: "https://fhir.nhs.uk/Id/sds-role-profile-id",

            // Cross care setting identifier
            CROSSCARESETTING_ID: "https://fhir.nhs.uk/Id/cross-care-setting-identifier"

            
        }
    }
};

// hl7uk-fhir-registry::index.js, Copyright © 2016+ HL7 UK