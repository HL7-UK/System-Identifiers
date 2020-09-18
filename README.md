# HL7 UK FHIR Registry
This repository documents identifiers for terminology and identifier systems within the UK health domain.
These are used by implementors of the HL7® FHIR® interoperability standard.

National and NHS identifiers have been agreed with the UK Terminology Centre.
These identifiers are used within national specifications and are recommended for use within local implementations.

The registry is also available in variety of computable formats to support implementors:
- XML
- CSV
- JS (as a NodeJS module)
- C# (as an assembly)

# Registry

## International
### Terminology systems

url | description | name
----|-------------|-----
http://snomed.info/sct | SNOMED CT | SNOMED_CT


### Identifier systems

url | description | name
----|-------------|-----
None defined
## Uk
### Terminology systems

url | description | name
----|-------------|-----
http://read.info/readv2 | Read Codes version 2 | READ_V2
http://read.info/ctv3 | Read Codes version 3 | READ_CTV3
https://fhir.hl7.org.uk/CareConnect-NHSNumberVerificationStatus-1 | NHS number verification status. Codes from NHS Data Dictionary: NHS Number Status Indicator Code. | NHS_NUMBER_VERIFICATION_STATUS
https://fhir.hl7.org.uk/CareConnect-EthnicCategory-1 | The ethnic category which the patient regards as their own. It is an extension of the ETHNIC CATEGORY CODE described in the NHS Data Model and Dictionary for England. | ETHNIC_CATEGORY
https://fhir.hl7.org.uk/CareConnect-SDSJobRoleName-1 | The name of the job role in SDS. | SDS_JOB_ROLE_NAME
https://fhir.hl7.org.uk/Id/emis-drug-codes | EMIS drug codes | EMIS_DRUG
https://fhir.hl7.org.uk/Id/egton-codes | Egton codes | EGTON
https://fhir.hl7.org.uk/Id/multilex-drug-codes | Multilex drug codes | MULTILEX_DRUG
https://fhir.hl7.org.uk/Id/resipuk-gemscript-drug-codes | Gemscript drug codes | GEMSCRIPT_DRUG
https://fhir.hl7.org.uk/Id/bnf-drug-codes | BNF drug codes | BNF_DRUG


### Identifier systems

url | description | name
----|-------------|-----
https://fhir.hl7.org.uk/Id/gmc-number | General Medical Council (GMC) number | GMC_NUMBER
https://fhir.hl7.org.uk/Id/gmp-number | General Practitioner (GMP) number | GMP_NUMBER
https://fhir.hl7.org.uk/Id/gnc-codes | General National Codes | GNC_CODE

## Nhs
### Terminology systems

url | description | name
----|-------------|-----
None defined

### Identifier systems

url | description | name
----|-------------|-----
https://fhir.nhs.uk/Id/nhs-number | The NHS Number identifier for a patient | NHS_NUMBER
https://fhir.nhs.uk/Id/ods-organization-code | ODS code to identify the organisation at organisation level | ODS_ORGANIZATION_CODE
https://fhir.nhs.uk/Id/ods-site-code | ODS Site code to identify the organisation at site level | ODS_SITE_CODE
https://fhir.nhs.uk/Id/sds-user-id | The SDS identifier that uniquely identifies the person as this agent | SDS_USER_ID
https://fhir.nhs.uk/Id/sds-role-profile-id | The SDS identifier that uniquely identifies the role profile of the person as this agent | SDS_ROLE_PROFILE_ID
https://fhir.nhs.uk/Id/cross-care-setting-identifier | Cross care setting identifier | CROSSCARESETTING_ID


## Contributions
Contributions to this repository are encouraged.

Contributions can be submitted in the following ways:

1. as pull requests to the develop branch.
2. by raising an issue at https://github.com/HL7-UK/System-Identifiers/issues
3. by email to [address TBC]

Contributions will be reviewed by HL7 UK and representatives of national programmes prior to acceptance.

## License
Copyright © 2016+ HL7 UK

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

HL7® FHIR® standard Copyright © 2011+ HL7

The HL7® FHIR® standard is used under the FHIR license. You may obtain a copy of the FHIR license at https:// www.hl7.org/fhir/license.html

## Trademarks
HL7 and FHIR are registered trademarks of Health Level Seven International

## Acknowledgements
Supported by [Black Pear Software](https://www.blackpear.com)

-- Generated Fri Sep 18 2020 17:53:21 GMT+0100 (BST)