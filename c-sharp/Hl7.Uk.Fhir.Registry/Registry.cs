// HL7 UK FHIR Registry, Copyright © 2016+ HL7 UK
// Generated Tue Aug 01 2017 11:49:02 GMT+0100 (BST)
namespace Hl7.Uk.Fhir.Registry
{
    public static class Registry
    {
        public static class International
        {
            public static class Terminology
            {
                /// <summary>
                /// SNOMED CT
                /// </summary>
                public const string SNOMED_CT = "http://snomed.info/sct";

                
            }

            public static class Identifier
            {
                //None defined
            }
        }
        public static class Uk
        {
            public static class Terminology
            {
                /// <summary>
                /// Read Codes version 2
                /// </summary>
                public const string READ_V2 = "http://read.info/readv2";

                /// <summary>
                /// Read Codes version 3
                /// </summary>
                public const string READ_CTV3 = "http://read.info/ctv3";

                /// <summary>
                /// NHS number verification status. Codes from NHS Data Dictionary: NHS Number Status Indicator Code.
                /// </summary>
                public const string NHS_NUMBER_VERIFICATION_STATUS = "https://fhir.hl7.org.uk/CareConnect-NHSNumberVerificationStatus-1";

                /// <summary>
                /// The ethnic category which the patient regards as their own. It is an extension of the ETHNIC CATEGORY CODE described in the NHS Data Model and Dictionary for England.
                /// </summary>
                public const string ETHNIC_CATEGORY = "https://fhir.hl7.org.uk/CareConnect-EthnicCategory-1";

                /// <summary>
                /// The kind of organization that this is.
                /// </summary>
                public const string ORGANISATION_TYPE = "https://fhir.hl7.org.uk/ValueSet/organisation-type-1";

                /// <summary>
                /// The name of the job role in SDS.
                /// </summary>
                public const string SDS_JOB_ROLE_NAME = "https://fhir.hl7.org.uk/ValueSet/sds-job-role-name-1";

                
            }

            public static class Identifier
            {
                //None defined
            }
        }
        public static class Nhs
        {
            public static class Terminology
            {
                //None defined
            }

            public static class Identifier
            {
                /// <summary>
               /// The NHS Number identifier for a patient
                /// </summary>
                public const string NHS_NUMBER = "http://fhir.nhs.net/Id/nhs-number";

                /// <summary>
               /// ODS code to identify the organisation at organisation level
                /// </summary>
                public const string ODS_ORGANIZATION_CODE = "http://fhir.nhs.net/Id/ods-organization-code";

                /// <summary>
               /// ODS Site code to identify the organisation at site level
                /// </summary>
                public const string ODS_SITE_CODE = "http://fhir.nhs.net/Id/ods-site-code";

                /// <summary>
               /// The SDS identifier that uniquely identifies the person as this agent
                /// </summary>
                public const string SDS_USER_ID = "http://fhir.nhs.net/Id/sds-user-id";

                /// <summary>
               /// The SDS identifier that uniquely identifies the role profile of the person as this agent
                /// </summary>
                public const string SDS_ROLE_PROFILE_ID = "http://fhir.nhs.net/Id/sds-role-profile-id";

                
            }
        }
    }
}

