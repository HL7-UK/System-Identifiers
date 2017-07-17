// Generated at Mon Jul 17 2017 21:17:09 GMT+0100 (BST)

namespace org.uk.hl7.fhir
{
    public static class Registry
    {
        public static class International
        {
            public static class Code
            {
                /// <summary>
                /// 
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
            public static class Code
            {
                /// <summary>
                /// 
                /// </summary>
                public const string READ_V2 = "http://read.info/readv2";

                /// <summary>
                /// 
                /// </summary>
                public const string READ_CTV3 = "http://read.info/ctv3";

                
            }

            public static class Identifier
            {
                //None defined
            }
        }
        public static class Nhs
        {
            public static class Code
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

// org.uk.hl7.fhir::system.cs, Copyright © 2016+ HL7 UK