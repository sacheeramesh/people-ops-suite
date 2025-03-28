// Copyright (c) 2024 WSO2 LLC. (https://www.wso2.com).
//
// WSO2 LLC. licenses this file to you under the Apache License,
// Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
import React from "react";

import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

export const LEAVE_APP = {
  LEAVE_TYPES: {
    casual: {
      type: "casual",
      title: "Other (Casual, Sick, etc.) Leave",
      icon: <BeachAccessIcon />,
      selectedIcon: <BeachAccessOutlinedIcon />,
      isCounted: true,
      countryRestriction: {
        "Sri Lanka": {
          enabled: true,
          title: "Annual/Casual Leave",
        },
      },
    },
    annual: {
      type: "annual",
      title: "Annual/PTO Leave",
      icon: <DateRangeIcon />,
      selectedIcon: <DateRangeOutlinedIcon />,
      isCounted: true,
      countryRestriction: {
        "Sri Lanka": {
          enabled: false,
          title: "Annual/PTO Leave",
        },
      },
    },
    paternity: {
      type: "paternity",
      title: "Paternity",
      icon: <ChildFriendlyIcon />,
      selectedIcon: <ChildFriendlyOutlinedIcon />,
      isCounted: true,
    },
    maternity: {
      type: "maternity",
      title: "Maternity",
      icon: <PregnantWomanIcon />,
      selectedIcon: <PregnantWomanOutlinedIcon />,
      isCounted: true,
    },
    lieu: {
      type: "lieu",
      title: "Lieu",
      icon: <ScheduleIcon />,
      selectedIcon: <ScheduleOutlinedIcon />,
      isCounted: false,
    },
  },
  MESSAGES: {
    CONFIRM_SUBMIT: {
      title: "Submit your leave",
      message: "Details:",
    },
    LEAVE_SUBMIT_SUCCESSFUL: {
      title: "Your leave submission was successful!",
      message: "",
    },
    LEAVE_SUBMIT_FAILURE: {
      title: "Failed to submit your leave request!",
      message: "Failed to submit your leave request!",
    },
    FORM_ERROR: {
      title: "Error",
      message:
        "Something went wrong while fetching your information, please try again later.",
    },
    CONFIRM_CANCEL: {
      title: "Are you sure you want to cancel this leave?",
      message: "Are you sure you want to cancel this leave?",
    },
    LEAVE_CANCEL_SUCCESS: {
      title: "Done!",
      message: "You have successfully cancelled your leave!",
    },
  },
  DEFAULT_EMAIL_RECIPIENTS: [
    {
      Name: "WSO2 Vacation Group",
      workEmail: "vacation-group@wso2.com",
    },
  ],
  COUNTRY_CODES: {
    UAE: "AE",
    Australia: "AU",
    Brazil: "BR",
    Canada: "CA",
    US: "US",
    Argentina: "AR",
    Mexico: "MX",
    UK: "GB",
    "Sri Lanka": "LK",
    "Saudi Arabia": "SA",
    Germany: "DE",
    Greece: "GR",
    France: "FR",
    Netherland: "NL",
    India: "IN",
    "New Zealand": "NZ",
    Singapore: "SG",
  },
  EMPLOYEE_STATUS: {
    Active: {
      color: "#4caf50",
      value: "Active",
    },
    "Marked leaver": {
      color: "#ff9800",
      value: "Marked leaver",
    },
    Left: {
      color: "#f44336",
      value: "Left",
    },
  },
  EMAILS: {
    GET_HELP_EMAIL_TO: "internal-apps-group@wso2.com",
    GET_HELP_EMAIL_SUBJECT: "[HELP] Leave Application",
  },
  COMMENT_LENGTH: 250,
  COUNTRIES: {
    AD: { code: "AD", label: "Andorra", phone: "376" },
    AE: {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
      serverName: "UAE",
    },
    AF: { code: "AF", label: "Afghanistan", phone: "93" },
    AG: { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
    AI: { code: "AI", label: "Anguilla", phone: "1-264" },
    AL: { code: "AL", label: "Albania", phone: "355" },
    AM: { code: "AM", label: "Armenia", phone: "374" },
    AO: { code: "AO", label: "Angola", phone: "244" },
    AQ: { code: "AQ", label: "Antarctica", phone: "672" },
    AR: { code: "AR", label: "Argentina", phone: "54" },
    AS: { code: "AS", label: "American Samoa", phone: "1-684" },
    AT: { code: "AT", label: "Austria", phone: "43" },
    AU: { code: "AU", label: "Australia", phone: "61", suggested: true },
    AW: { code: "AW", label: "Aruba", phone: "297" },
    AX: { code: "AX", label: "Alland Islands", phone: "358" },
    AZ: { code: "AZ", label: "Azerbaijan", phone: "994" },
    BA: { code: "BA", label: "Bosnia and Herzegovina", phone: "387" },
    BB: { code: "BB", label: "Barbados", phone: "1-246" },
    BD: { code: "BD", label: "Bangladesh", phone: "880" },
    BE: { code: "BE", label: "Belgium", phone: "32" },
    BF: { code: "BF", label: "Burkina Faso", phone: "226" },
    BG: { code: "BG", label: "Bulgaria", phone: "359" },
    BH: { code: "BH", label: "Bahrain", phone: "973" },
    BI: { code: "BI", label: "Burundi", phone: "257" },
    BJ: { code: "BJ", label: "Benin", phone: "229" },
    BL: { code: "BL", label: "Saint Barthelemy", phone: "590" },
    BM: { code: "BM", label: "Bermuda", phone: "1-441" },
    BN: { code: "BN", label: "Brunei Darussalam", phone: "673" },
    BO: { code: "BO", label: "Bolivia", phone: "591" },
    BR: { code: "BR", label: "Brazil", phone: "55" },
    BS: { code: "BS", label: "Bahamas", phone: "1-242" },
    BT: { code: "BT", label: "Bhutan", phone: "975" },
    BV: { code: "BV", label: "Bouvet Island", phone: "47" },
    BW: { code: "BW", label: "Botswana", phone: "267" },
    BY: { code: "BY", label: "Belarus", phone: "375" },
    BZ: { code: "BZ", label: "Belize", phone: "501" },
    CA: { code: "CA", label: "Canada", phone: "1", suggested: true },
    CC: { code: "CC", label: "Cocos (Keeling) Islands", phone: "61" },
    CD: {
      code: "CD",
      label: "Congo, Democratic Republic of the",
      phone: "243",
    },
    CF: { code: "CF", label: "Central African Republic", phone: "236" },
    CG: { code: "CG", label: "Congo, Republic of the", phone: "242" },
    CH: { code: "CH", label: "Switzerland", phone: "41" },
    CI: { code: "CI", label: "Cote d'Ivoire", phone: "225" },
    CK: { code: "CK", label: "Cook Islands", phone: "682" },
    CL: { code: "CL", label: "Chile", phone: "56" },
    CM: { code: "CM", label: "Cameroon", phone: "237" },
    CN: { code: "CN", label: "China", phone: "86" },
    CO: { code: "CO", label: "Colombia", phone: "57" },
    CR: { code: "CR", label: "Costa Rica", phone: "506" },
    CU: { code: "CU", label: "Cuba", phone: "53" },
    CV: { code: "CV", label: "Cape Verde", phone: "238" },
    CW: { code: "CW", label: "Curacao", phone: "599" },
    CX: { code: "CX", label: "Christmas Island", phone: "61" },
    CY: { code: "CY", label: "Cyprus", phone: "357" },
    CZ: { code: "CZ", label: "Czech Republic", phone: "420" },
    DE: { code: "DE", label: "Germany", phone: "49", suggested: true },
    DJ: { code: "DJ", label: "Djibouti", phone: "253" },
    DK: { code: "DK", label: "Denmark", phone: "45" },
    DM: { code: "DM", label: "Dominica", phone: "1-767" },
    DO: { code: "DO", label: "Dominican Republic", phone: "1-809" },
    DZ: { code: "DZ", label: "Algeria", phone: "213" },
    EC: { code: "EC", label: "Ecuador", phone: "593" },
    EE: { code: "EE", label: "Estonia", phone: "372" },
    EG: { code: "EG", label: "Egypt", phone: "20" },
    EH: { code: "EH", label: "Western Sahara", phone: "212" },
    ER: { code: "ER", label: "Eritrea", phone: "291" },
    ES: { code: "ES", label: "Spain", phone: "34" },
    ET: { code: "ET", label: "Ethiopia", phone: "251" },
    FI: { code: "FI", label: "Finland", phone: "358" },
    FJ: { code: "FJ", label: "Fiji", phone: "679" },
    FK: { code: "FK", label: "Falkland Islands (Malvinas)", phone: "500" },
    FM: { code: "FM", label: "Micronesia, Federated States of", phone: "691" },
    FO: { code: "FO", label: "Faroe Islands", phone: "298" },
    FR: { code: "FR", label: "France", phone: "33", suggested: true },
    GA: { code: "GA", label: "Gabon", phone: "241" },
    GB: { code: "GB", label: "United Kingdom", phone: "44", serverName: "UK" },
    GD: { code: "GD", label: "Grenada", phone: "1-473" },
    GE: { code: "GE", label: "Georgia", phone: "995" },
    GF: { code: "GF", label: "French Guiana", phone: "594" },
    GG: { code: "GG", label: "Guernsey", phone: "44" },
    GH: { code: "GH", label: "Ghana", phone: "233" },
    GI: { code: "GI", label: "Gibraltar", phone: "350" },
    GL: { code: "GL", label: "Greenland", phone: "299" },
    GM: { code: "GM", label: "Gambia", phone: "220" },
    GN: { code: "GN", label: "Guinea", phone: "224" },
    GP: { code: "GP", label: "Guadeloupe", phone: "590" },
    GQ: { code: "GQ", label: "Equatorial Guinea", phone: "240" },
    GR: { code: "GR", label: "Greece", phone: "30" },
    GS: {
      code: "GS",
      label: "South Georgia and the South Sandwich Islands",
      phone: "500",
    },
    GT: { code: "GT", label: "Guatemala", phone: "502" },
    GU: { code: "GU", label: "Guam", phone: "1-671" },
    GW: { code: "GW", label: "Guinea-Bissau", phone: "245" },
    GY: { code: "GY", label: "Guyana", phone: "592" },
    HK: { code: "HK", label: "Hong Kong", phone: "852" },
    HM: {
      code: "HM",
      label: "Heard Island and McDonald Islands",
      phone: "672",
    },
    HN: { code: "HN", label: "Honduras", phone: "504" },
    HR: { code: "HR", label: "Croatia", phone: "385" },
    HT: { code: "HT", label: "Haiti", phone: "509" },
    HU: { code: "HU", label: "Hungary", phone: "36" },
    ID: { code: "ID", label: "Indonesia", phone: "62" },
    IE: { code: "IE", label: "Ireland", phone: "353" },
    IL: { code: "IL", label: "Israel", phone: "972" },
    IM: { code: "IM", label: "Isle of Man", phone: "44" },
    IN: { code: "IN", label: "India", phone: "91" },
    IO: { code: "IO", label: "British Indian Ocean Territory", phone: "246" },
    IQ: { code: "IQ", label: "Iraq", phone: "964" },
    IR: { code: "IR", label: "Iran, Islamic Republic of", phone: "98" },
    IS: { code: "IS", label: "Iceland", phone: "354" },
    IT: { code: "IT", label: "Italy", phone: "39" },
    JE: { code: "JE", label: "Jersey", phone: "44" },
    JM: { code: "JM", label: "Jamaica", phone: "1-876" },
    JO: { code: "JO", label: "Jordan", phone: "962" },
    JP: { code: "JP", label: "Japan", phone: "81", suggested: true },
    KE: { code: "KE", label: "Kenya", phone: "254" },
    KG: { code: "KG", label: "Kyrgyzstan", phone: "996" },
    KH: { code: "KH", label: "Cambodia", phone: "855" },
    KI: { code: "KI", label: "Kiribati", phone: "686" },
    KM: { code: "KM", label: "Comoros", phone: "269" },
    KN: { code: "KN", label: "Saint Kitts and Nevis", phone: "1-869" },
    KP: {
      code: "KP",
      label: "Korea, Democratic People's Republic of",
      phone: "850",
    },
    KR: { code: "KR", label: "Korea, Republic of", phone: "82" },
    KW: { code: "KW", label: "Kuwait", phone: "965" },
    KY: { code: "KY", label: "Cayman Islands", phone: "1-345" },
    KZ: { code: "KZ", label: "Kazakhstan", phone: "7" },
    LA: { code: "LA", label: "Lao People's Democratic Republic", phone: "856" },
    LB: { code: "LB", label: "Lebanon", phone: "961" },
    LC: { code: "LC", label: "Saint Lucia", phone: "1-758" },
    LI: { code: "LI", label: "Liechtenstein", phone: "423" },
    LK: { code: "LK", label: "Sri Lanka", phone: "94" },
    LR: { code: "LR", label: "Liberia", phone: "231" },
    LS: { code: "LS", label: "Lesotho", phone: "266" },
    LT: { code: "LT", label: "Lithuania", phone: "370" },
    LU: { code: "LU", label: "Luxembourg", phone: "352" },
    LV: { code: "LV", label: "Latvia", phone: "371" },
    LY: { code: "LY", label: "Libyan Arab Jamahiriya", phone: "218" },
    MA: { code: "MA", label: "Morocco", phone: "212" },
    MC: { code: "MC", label: "Monaco", phone: "377" },
    MD: { code: "MD", label: "Moldova, Republic of", phone: "373" },
    ME: { code: "ME", label: "Montenegro", phone: "382" },
    MF: { code: "MF", label: "Saint Martin", phone: "590" },
    MG: { code: "MG", label: "Madagascar", phone: "261" },
    MH: { code: "MH", label: "Marshall Islands", phone: "692" },
    MK: {
      code: "MK",
      label: "Macedonia, The Former Yugoslav Republic Of",
      phone: "389",
    },
    ML: { code: "ML", label: "Mali", phone: "223" },
    MM: { code: "MM", label: "Myanmar", phone: "95" },
    MN: { code: "MN", label: "Mongolia", phone: "976" },
    MO: { code: "MO", label: "Macao", phone: "853" },
    MP: { code: "MP", label: "Northern Mariana Islands", phone: "1-670" },
    MQ: { code: "MQ", label: "Martinique", phone: "596" },
    MR: { code: "MR", label: "Mauritania", phone: "222" },
    MS: { code: "MS", label: "Montserrat", phone: "1-664" },
    MT: { code: "MT", label: "Malta", phone: "356" },
    MU: { code: "MU", label: "Mauritius", phone: "230" },
    MV: { code: "MV", label: "Maldives", phone: "960" },
    MW: { code: "MW", label: "Malawi", phone: "265" },
    MX: { code: "MX", label: "Mexico", phone: "52" },
    MY: { code: "MY", label: "Malaysia", phone: "60" },
    MZ: { code: "MZ", label: "Mozambique", phone: "258" },
    NA: { code: "NA", label: "Namibia", phone: "264" },
    NC: { code: "NC", label: "New Caledonia", phone: "687" },
    NE: { code: "NE", label: "Niger", phone: "227" },
    NF: { code: "NF", label: "Norfolk Island", phone: "672" },
    NG: { code: "NG", label: "Nigeria", phone: "234" },
    NI: { code: "NI", label: "Nicaragua", phone: "505" },
    NL: {
      code: "NL",
      label: "Netherlands",
      phone: "31",
      serverName: "Netherland",
    },
    NO: { code: "NO", label: "Norway", phone: "47" },
    NP: { code: "NP", label: "Nepal", phone: "977" },
    NR: { code: "NR", label: "Nauru", phone: "674" },
    NU: { code: "NU", label: "Niue", phone: "683" },
    NZ: { code: "NZ", label: "New Zealand", phone: "64" },
    OM: { code: "OM", label: "Oman", phone: "968" },
    PA: { code: "PA", label: "Panama", phone: "507" },
    PE: { code: "PE", label: "Peru", phone: "51" },
    PF: { code: "PF", label: "French Polynesia", phone: "689" },
    PG: { code: "PG", label: "Papua New Guinea", phone: "675" },
    PH: { code: "PH", label: "Philippines", phone: "63" },
    PK: { code: "PK", label: "Pakistan", phone: "92" },
    PL: { code: "PL", label: "Poland", phone: "48" },
    PM: { code: "PM", label: "Saint Pierre And Miquelon", phone: "508" },
    PN: { code: "PN", label: "Pitcairn", phone: "870" },
    PR: { code: "PR", label: "Puerto Rico", phone: "1" },
    PS: { code: "PS", label: "Palestinian Territory, Occupied", phone: "970" },
    PT: { code: "PT", label: "Portugal", phone: "351" },
    PW: { code: "PW", label: "Palau", phone: "680" },
    PY: { code: "PY", label: "Paraguay", phone: "595" },
    QA: { code: "QA", label: "Qatar", phone: "974" },
    RE: { code: "RE", label: "Reunion", phone: "262" },
    RO: { code: "RO", label: "Romania", phone: "40" },
    RS: { code: "RS", label: "Serbia", phone: "381" },
    RU: { code: "RU", label: "Russian Federation", phone: "7" },
    RW: { code: "RW", label: "Rwanda", phone: "250" },
    SA: { code: "SA", label: "Saudi Arabia", phone: "966" },
    SB: { code: "SB", label: "Solomon Islands", phone: "677" },
    SC: { code: "SC", label: "Seychelles", phone: "248" },
    SD: { code: "SD", label: "Sudan", phone: "249" },
    SE: { code: "SE", label: "Sweden", phone: "46" },
    SG: { code: "SG", label: "Singapore", phone: "65" },
    SH: {
      code: "SH",
      label: "Saint Helena, Ascension And Tristan Da Cunha",
      phone: "290",
    },
    SI: { code: "SI", label: "Slovenia", phone: "386" },
    SJ: { code: "SJ", label: "Svalbard And Jan Mayen", phone: "47" },
    SK: { code: "SK", label: "Slovakia", phone: "421" },
    SL: { code: "SL", label: "Sierra Leone", phone: "232" },
    SM: { code: "SM", label: "San Marino", phone: "378" },
    SN: { code: "SN", label: "Senegal", phone: "221" },
    SO: { code: "SO", label: "Somalia", phone: "252" },
    SR: { code: "SR", label: "Suriname", phone: "597" },
    SS: { code: "SS", label: "South Sudan", phone: "211" },
    ST: { code: "ST", label: "Sao Tome And Principe", phone: "239" },
    SV: { code: "SV", label: "El Salvador", phone: "503" },
    SX: { code: "SX", label: "Sint Maarten (Dutch part)", phone: "1-721" },
    SY: { code: "SY", label: "Syrian Arab Republic", phone: "963" },
    SZ: { code: "SZ", label: "Swaziland", phone: "268" },
    TC: { code: "TC", label: "Turks And Caicos Islands", phone: "1-649" },
    TD: { code: "TD", label: "Chad", phone: "235" },
    TF: { code: "TF", label: "French Southern Territories", phone: "262" },
    TG: { code: "TG", label: "Togo", phone: "228" },
    TH: { code: "TH", label: "Thailand", phone: "66" },
    TJ: { code: "TJ", label: "Tajikistan", phone: "992" },
    TK: { code: "TK", label: "Tokelau", phone: "690" },
    TL: { code: "TL", label: "Timor-Leste", phone: "670" },
    TM: { code: "TM", label: "Turkmenistan", phone: "993" },
    TN: { code: "TN", label: "Tunisia", phone: "216" },
    TO: { code: "TO", label: "Tonga", phone: "676" },
    TR: { code: "TR", label: "Turkey", phone: "90" },
    TT: { code: "TT", label: "Trinidad and Tobago", phone: "1-868" },
    TV: { code: "TV", label: "Tuvalu", phone: "688" },
    TW: { code: "TW", label: "Taiwan, Province Of China", phone: "886" },
    TZ: { code: "TZ", label: "United Republic Of Tanzania", phone: "255" },
    UA: { code: "UA", label: "Ukraine", phone: "380" },
    UG: { code: "UG", label: "Uganda", phone: "256" },
    UM: {
      code: "UM",
      label: "United States Minor Outlying Islands",
      phone: "1",
    },
    US: { code: "US", label: "United States", phone: "1", serverName: "US" },
    UY: { code: "UY", label: "Uruguay", phone: "598" },
    UZ: { code: "UZ", label: "Uzbekistan", phone: "998" },
    VA: { code: "VA", label: "Holy See (Vatican City State)", phone: "379" },
    VC: {
      code: "VC",
      label: "Saint Vincent And The Grenadines",
      phone: "1-784",
    },
    VE: { code: "VE", label: "Venezuela, Bolivarian Republic Of", phone: "58" },
    VG: { code: "VG", label: "Virgin Islands, British", phone: "1-284" },
    VI: { code: "VI", label: "Virgin Islands, U.S.", phone: "1-340" },
    VN: { code: "VN", label: "Viet Nam", phone: "84" },
    VU: { code: "VU", label: "Vanuatu", phone: "678" },
    WF: { code: "WF", label: "Wallis And Futuna", phone: "681" },
    WS: { code: "WS", label: "Samoa", phone: "685" },
    XK: { code: "XK", label: "Kosovo", phone: "383" },
    YE: { code: "YE", label: "Yemen", phone: "967" },
    YT: { code: "YT", label: "Mayotte", phone: "262" },
    ZA: { code: "ZA", label: "South Africa", phone: "27" },
    ZM: { code: "ZM", label: "Zambia", phone: "260" },
    ZW: { code: "ZW", label: "Zimbabwe", phone: "263" },
  },
};

export const SERVER_TO_COUNTRY_CODE_MAP = (() => {
  var tempMap = {};
  Object.values(LEAVE_APP.COUNTRIES).forEach((country) => {
    let tempElement = {
      ...LEAVE_APP.COUNTRIES[country.code],
    };
    tempMap[tempElement.label] = tempElement;
    if (tempElement.serverName) {
      tempMap[tempElement.serverName] = tempElement;
    }
  });

  return tempMap;
})();

export const INPUT_INVALID_MSG_GATEWAY = {};

export const PUBLIC_EMAIL_TEXT =
  "Your comment will be shown to all email recipients including" +
  LEAVE_APP.DEFAULT_EMAIL_RECIPIENTS.map((e) => {
    return " " + e.Name + " (" + e.workEmail + ")";
  }).join() +
  ".";
export const PRIVATE_EMAIL_TEXT =
  "Your comment will only be shown to your lead and any emails that have been added.";
