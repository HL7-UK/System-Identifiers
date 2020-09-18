package uk.org.hl7.fhir.registry;

/**
* HL7 UK FHIR Registry, Copyright © 2016+ HL7 UK
* Generated Fri Sep 18 2020 17:53:21 GMT+0100 (BST)
*/
public class Registry {
    // DSTU 1 (Official version) with 2 technical errata
    public static string FHIR_DSTU1 = "0.0.82";

    // DSTU 2 (Official version)
    public static string FHIR_DSTU2 = "1.0.x";

    // FHIR Release 3 (STU)
    public static string FHIR_STU3 = "3.0.x";

    // FHIR Release 4
    public static string FHIR_R4 = "4.0.x";

    // SNOMED CT
    public static string International_terminology_SNOMED_CT = "http://snomed.info/sct";

    // Read Codes version 2
    public static string Uk_terminology_READ_V2 = "http://read.info/readv2";

    // Read Codes version 3
    public static string Uk_terminology_READ_CTV3 = "http://read.info/ctv3";

    // NHS number verification status. Codes from NHS Data Dictionary: NHS Number Status Indicator Code.
    public static string Uk_terminology_NHS_NUMBER_VERIFICATION_STATUS = "https://fhir.hl7.org.uk/CareConnect-NHSNumberVerificationStatus-1";

    // The ethnic category which the patient regards as their own. It is an extension of the ETHNIC CATEGORY CODE described in the NHS Data Model and Dictionary for England.
    public static string Uk_terminology_ETHNIC_CATEGORY = "https://fhir.hl7.org.uk/CareConnect-EthnicCategory-1";

    // The name of the job role in SDS.
    public static string Uk_terminology_SDS_JOB_ROLE_NAME = "https://fhir.hl7.org.uk/CareConnect-SDSJobRoleName-1";

    // EMIS drug codes
    public static string Uk_terminology_EMIS_DRUG = "https://fhir.hl7.org.uk/Id/emis-drug-codes";

    // Egton codes
    public static string Uk_terminology_EGTON = "https://fhir.hl7.org.uk/Id/egton-codes";

    // Multilex drug codes
    public static string Uk_terminology_MULTILEX_DRUG = "https://fhir.hl7.org.uk/Id/multilex-drug-codes";

    // Gemscript drug codes
    public static string Uk_terminology_GEMSCRIPT_DRUG = "https://fhir.hl7.org.uk/Id/resipuk-gemscript-drug-codes";

    // BNF drug codes
    public static string Uk_terminology_BNF_DRUG = "https://fhir.hl7.org.uk/Id/bnf-drug-codes";

    // General Medical Council (GMC) number
    public static string Uk_identifier_GMC_NUMBER = "https://fhir.hl7.org.uk/Id/gmc-number";

    // General Practitioner (GMP) number
    public static string Uk_identifier_GMP_NUMBER = "https://fhir.hl7.org.uk/Id/gmp-number";

    // General National Codes
    public static string Uk_identifier_GNC_CODE = "https://fhir.hl7.org.uk/Id/gnc-codes";

    // The NHS Number identifier for a patient
    public static string Nhs_identifier_NHS_NUMBER = "https://fhir.nhs.uk/Id/nhs-number";

    // ODS code to identify the organisation at organisation level
    public static string Nhs_identifier_ODS_ORGANIZATION_CODE = "https://fhir.nhs.uk/Id/ods-organization-code";

    // ODS Site code to identify the organisation at site level
    public static string Nhs_identifier_ODS_SITE_CODE = "https://fhir.nhs.uk/Id/ods-site-code";

    // The SDS identifier that uniquely identifies the person as this agent
    public static string Nhs_identifier_SDS_USER_ID = "https://fhir.nhs.uk/Id/sds-user-id";

    // The SDS identifier that uniquely identifies the role profile of the person as this agent
    public static string Nhs_identifier_SDS_ROLE_PROFILE_ID = "https://fhir.nhs.uk/Id/sds-role-profile-id";

    // Cross care setting identifier
    public static string Nhs_identifier_CROSSCARESETTING_ID = "https://fhir.nhs.uk/Id/cross-care-setting-identifier";

}