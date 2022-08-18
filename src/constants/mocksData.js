// users
export const USERS = [

];
export const VERIFCATIONCARD = [
  {
    id: 1,
    name: "validationscreen.passport",
    asset: "passportIcon",
    color: "yellow",
    type: 1,
    uploadscreen: {
      title: "uploadscreen.passportupload",
      subtitle: "uploadscreen.subtitle",
      icon: "passportpageIcon"
    },
    camerainstruction: {
      title: "uploadscreen.camratitle",
      instruction: "uploadscreen.camerainstruction",
      subinstruction: "uploadscreen.camerasubinstruction"
    },
    readScreen: {
      title: "readscreen.title",
      subtitle: "readscreen.subtitle"
    },
    selfiecamerainstruction: {
      title: "selfiescreen.title",
      instruction: "selfiescreen.camerasubtitle",
    }
  },
  {
    id: 2,
    name: "validationscreen.identitycard",
    asset: "cardIcon",
    color: "blue",
    type: 2,
    uploadscreen: {
      title: "uploadscreen.frontpage",
      subtitle: "uploadscreen.subtitledoc",
      icon: "frontpage"
    },
    camerainstruction: {
      title: "uploadscreen.camratitle",
      instruction: "uploadscreen.camerainstruction1",
      subinstruction: "uploadscreen.camerasubinstruction1"
    },
    readScreen: {
      title: "readscreen.title",
      subtitle: "readscreen.subtitledoc"
    },
    uploadbackscreen: {
      title: "uploadscreen.backpage",
      subtitle: "uploadscreen.subtitleback",
      icon: "backpage"
    },
    camerabackinstruction: {
      title: "uploadscreen.camratitle",
      instruction: "uploadscreen.camerainstruction2",
      subinstruction: "uploadscreen.camerasubinstruction2"
    }
  },
  {
    id: 3,
    name: "validationscreen.certificate",
    asset: "docIcon",
    color: "orange",
    type: 3,
    uploadscreen: {
      title: "uploadscreen.birthcertificate",
      subtitle: "uploadscreen.subtitlecertificate",
      icon: "certificate"
    },
    camerainstruction: {
      title: "uploadscreen.camratitle",
      instruction: "uploadscreen.camerainstruction3",
      subinstruction: "uploadscreen.camerasubinstruction3"
    },
    readScreen: {
      title: "readscreen.title",
      subtitle: "readscreen.subtitlecertificate"
    }
  },
];

export const APPLICATIONDATA = [
  {
    id: 1,
    name: "applicationscreen.office",
    searchname: "office",
    image: "officeIcon"
  },
  {
    id: 2,
    name: "applicationscreen.box",
    searchname: "box",
    image: "boxIcon"
  },
  {
    id: 3,
    name: "applicationscreen.google",
    searchname: "google",
    image: "googleIcon"
  }
];
export const DEVICEDATA = [
  {
    title: "Devices",
    data: [
      {
        id: 1,
        name: "Sam's iPhone",
        placeanddate: "United States - 10:45 PM",
        type: "ios"
      },
      {
        id: 2,
        name: "Sam's Android",
        placeanddate: "United States -  21 Apr, 2022",
        type: "android"
      },
      {
        id: 3,
        name: "Surface Laptop",
        placeanddate: "United States -  18 Apr, 2022",
        type: "web"
      }
    ]
  },
  {
    title: "",
    data: []
  },
  {
    title: "",
    data: []
  },
  {
    title: "",
    data: []
  }
];
export const IDENTITYDATA = [

  {
    id: 1,
    name: "Driver License",
    number: "0256859520",
    isOpen: false,
  },
  {
    id: 2,
    name: "Student ID",
    number: "02365895620",
    isOpen: false,
  },
  {
    id: 3,
    name: "Health Card",
    number: "0256985698520",
    isOpen: false,
  }

];
export const USERDETAILS = {
  "detailsscreen.dateofbith": "05/20/1981",
  "detailsscreen.email": "robertjohnson123@gmail.com",
  "detailsscreen.gneder": "Male",
  "detailsscreen.idnumber": "00000000020",
  "detailsscreen.dateofexpiry": "01/26/2024",
  "detailsscreen.dateofinsurance": "02/10/2022",
  "detailsscreen.agencycard": "MTS14775029",
  "detailsscreen.issuerin": "9999"
};
export const CARDDATA = [
  {
    id: 1,
    icon: "dashPersonalIcon",
    name: 'myidentities.personal',
    documentData: [
      {
        title: 'Data1',
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlVertical",
            frontimage: "dlVertical",
            backimage: "backHorizontal",
            qrimage: "qrimageBig",
            data: [
              {
                id: 4,
                name: "OTP",
                icon: "otpIcon"
              },
              {
                id: 1,
                name: "PKI Certificate ",
                number: "44b5731f174dd47b8a0s0badc85e08768c71d2d",
                icon: "pkicertificateIcon"
              },
              {
                id: 2,
                name: "FIDO2",
                number: "ac7d9de2-feef-4085-99d 2-04f0211a7ade",
                icon: "fdi2Icon",
              },
              {
                id: 3,
                name: "Consent",
                number: "e0b02f3d-5f8b-4101-9f0a-6s1460d1c7aa",
                icon: "consentIcon"
              },
            ],
            activestatus: 3,
            verifystatus: 2
          }
        ],
      },
      {
        title: 'Data2',
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            frontimage: "dlimage",
            backimage: "backHorizontal",
            qrimage: "qrimageBig",
            data: [{
              id: 1,
              name: "PKI Certificate ",
              number: "44b5731f174dd47b8a0s0badc85e08768c71d2d",
              icon: "pkicertificateIcon"
            },
            {
              id: 2,
              name: "FIDO2",
              number: "ac7d9de2-feef-4085-99d 2-04f0211a7ade",
              icon: "fdi2Icon"
            },
            {
              id: 3,
              name: "Consent",
              number: "e0b02f3d-5f8b-4101-9f0a-6s1460d1c7aa",
              icon: "consentIcon"
            },
            ],
            activestatus: 1,
            verifystatus: 1
          }
        ],
      },
      {
        title: 'Data2',
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            frontimage: "dlimage",
            backimage: "backHorizontal",
            qrimage: "qrimageBig",
            data: [{
              id: 1,
              name: "PKI Certificate ",
              number: "44b5731f174dd47b8a0s0badc85e08768c71d2d",
              icon: "pkicertificateIcon"
            },
            {
              id: 2,
              name: "FIDO2",
              number: "ac7d9de2-feef-4085-99d 2-04f0211a7ade",
              icon: "fdi2Icon"
            },
            {
              id: 3,
              name: "Consent",
              number: "e0b02f3d-5f8b-4101-9f0a-6s1460d1c7aa",
              icon: "consentIcon"
            },
            ],
            activestatus: 1,
            verifystatus: 1
          }
        ],
      },
      {
        title: 'Data2',
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            frontimage: "dlimage",
            backimage: "backHorizontal",
            qrimage: "qrimageBig",
            data: [{
              id: 1,
              name: "PKI Certificate ",
              number: "44b5731f174dd47b8a0s0badc85e08768c71d2d",
              icon: "pkicertificateIcon"
            },
            {
              id: 2,
              name: "FIDO2",
              number: "ac7d9de2-feef-4085-99d 2-04f0211a7ade",
              icon: "fdi2Icon"
            },
            {
              id: 3,
              name: "Consent",
              number: "e0b02f3d-5f8b-4101-9f0a-6s1460d1c7aa",
              icon: "consentIcon"
            },
            ],
            activestatus: 1,
            verifystatus: 1
          }
        ],
      }
    ],
  },
  {
    id: 2,
    name: 'myidentities.employement',
    icon: "dashemployementIcon",
    documentData: [
      {
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            frontimage: "dlVertical",
            backimage: "backHorizontal",
            qrimage: "qrimageBig",
            data: [{
              id: 1,
              name: "PKI Certificate ",
              number: "44b5731f174dd47b8a0s0badc85e08768c71d2d",
              icon: "pkicertificateIcon"
            },
            {
              id: 2,
              name: "FIDO2",
              number: "ac7d9de2-feef-4085-99d 2-04f0211a7ade",
              icon: "fdi2Icon"
            },
            {
              id: 3,
              name: "Consent",
              number: "e0b02f3d-5f8b-4101-9f0a-6s1460d1c7aa",
              icon: "consentIcon"
            },
            ],
            activestatus: 1,
            verifystatus: 1
          }
        ],
      }
    ],
  },
  {
    id: 3,
    name: 'myidentities.financial',
    icon: "dashfinancialIcon",
    documentData: [
      {
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            frontimage: "dlVertical",
            backimage: "backHorizontal",
            qrimage: "qrimageBig",
            data: [{
              id: 1,
              name: "PKI Certificate ",
              number: "44b5731f174dd47b8a0s0badc85e08768c71d2d",
              icon: "pkicertificateIcon"
            },
            {
              id: 2,
              name: "FIDO2",
              number: "ac7d9de2-feef-4085-99d 2-04f0211a7ade",
              icon: "fdi2Icon"
            },
            {
              id: 3,
              name: "Consent",
              number: "e0b02f3d-5f8b-4101-9f0a-6s1460d1c7aa",
              icon: "consentIcon"
            },
            ],
            activestatus: 1,
            verifystatus: 1
          }
        ],

      }
    ],
  },
  {
    id: 4,
    name: 'myidentities.certification',
    icon: "dashcertificateIcon",
    documentData: [
      {
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            frontimage: "dlVertical",
            backimage: "backHorizontal",
            qrimage: "qrimageBig",
            data: [{
              id: 1,
              name: "PKI Certificate ",
              number: "44b5731f174dd47b8a0s0badc85e08768c71d2d",
              icon: "pkicertificateIcon"
            },
            {
              id: 2,
              name: "FIDO2",
              number: "ac7d9de2-feef-4085-99d 2-04f0211a7ade",
              icon: "fdi2Icon"
            },
            {
              id: 3,
              name: "Consent",
              number: "e0b02f3d-5f8b-4101-9f0a-6s1460d1c7aa",
              icon: "consentIcon"
            },
            ],
            activestatus: 1,
            verifystatus: 1
          }
        ],

      }
    ],
  }
];

export const ACCOUNTDATA = [
  {
    id: 1,
    name: "accountpage.recommendsetting",
    description: "accountpage.recomanddescription",
    icon: "normalSettingIcon",
    subData: [
      {
        id: 1,
        type: 1,
        name: "accountpage.darkmode"
      },
      {
        id: 2,
        type: 2,
        name: "accountpage.language"
      },
      {
        id: 3,
        type: 3,
        name: "accountpage.feedback",
        navigate: "Feedback"
      },
      {
        id: 4,
        type: 3,
        name: "accountpage.notification",
        navigate: "Notification"
      },
      {
        id: 5,
        type: 3,
        name: "accountpage.reports",
        navigate: "Reports"
      },
      {
        id: 6,
        type: 3,
        name: "accountpage.consentsetting",
        navigate: ""
      },
    ]
  },
  {
    id: 2,
    name: "accountpage.paymentsetting",
    description: "accountpage.paymentdescription",
    icon: "paymentsettingIcon",
    subData: [
      {
        id: 1,
        type: 3,
        name: "accountpage.managepayment",
        navigate: "PaymentMethod"
      },
    ]
  },
  {
    id: 3,
    name: "accountpage.privacysetting",
    description: "accountpage.privacydescription",
    icon: "privacysettingIcon",
    subData: [
      {
        id: 1,
        type: 3,
        name: "accountpage.useraggrement",
        navigate: "Useraggrement"
      },
      {
        id: 2,
        type: 3,
        name: "accountpage.privacy",
        navigate: ""
      },
      {
        id: 3,
        type: 3,
        name: "accountpage.about",
        navigate: "AboutUs"
      },
    ]
  }
];

export const READNOTIFICATION = [
  {
    id: 1,
    title: "notificationscreen.lastmessages",
    body: "Congratulations, you have successfully completed device registration.",
    time: "3h ago",
    type: 1,
  },
  {
    id: 2,
    title: "notificationscreen.checkprofile",
    body: "Your profile has a new update",
    time: "3h ago",
    type: 2,
  },
  {
    id: 3,
    title: "notificationscreen.renewid",
    body: "Your ID has been renewed",
    time: "3h ago",
    type: 3,
  },
  {
    id: 4,
    title: "notificationscreen.lastmessages",
    body: "Congratulations, you have successfully completed device registration.",
    time: "3h ago",
    type: 1,
  },
];
export const UNREADNOTIFICATION = [
  {
    id: 1,
    title: "notificationscreen.newmessages",
    body: "You have a new message from the owner.",
    time: "3h ago",
    type: 1,
  },
  {
    id: 4,
    title: "notificationscreen.newalert",
    body: "Your application is not approved Please check your email.",
    time: "5h ago",
    type: 4,
  }
];
export const FIDO2DATA = [
  {
    id: 1,
    title: "fido2screen.user",
    subtitle: "robertjohnson123@gmail.com",
    icon: "userIcon",
  },
  {
    id: 2,
    title: "fido2screen.application",
    subtitle: ": FIDO2/WebAuthn \n Passwordless Registration",
    icon: "applicationIcon",
  },
  {
    id: 3,
    title: "fido2screen.action",
    subtitle: "Click on the Register button to configure your mobile device to be used as a FIDO2 Authenticator. Use Google Chrome or Apple Safari browser for registration",
    icon: "actionIcon",
  },
  {
    id: 4,
    title: "fido2screen.expirttime",
    subtitle: "07/05/2022 at 06:44",
    icon: "timeIcon",
  }
];
export const LOGINREQUESTDATA = [
  {
    id: 1,
    title: "loginrequest.application",
    subtitle: "Hospital",
    icon: "applicationIcon",
  },
  {
    id: 2,
    title: "loginrequest.ipaddress",
    subtitle: "91.257.64.161",
    icon: "navIcon",
  },
  {
    id: 3,
    title: "loginrequest.requestby",
    subtitle: "robertjohnson123@gmail.com",
    icon: "userIcon",
  },
  {
    id: 4,
    title: "loginrequest.time",
    subtitle: "07/04/2022 at 18:44",
    icon: "timeIcon",
  }
];
export const PAYMENTCARDS = [
  {
    id: 1,
    icon: "masterCardIcon",
    title: "1234123412341223"
  },
  {
    id: 2,
    icon: "visaCardIcon",
    title: "1234123412341223"
  },
];
export const OTHERCARDS = [
  {
    id: 1,
    icon: "appleIcon",
    title: "paymentmethodscreen.applepay"
  },
  {
    id: 2,
    icon: "paypalIcon",
    title: "paymentmethodscreen.paypal"
  },
];
export const NOTEDATA = [
  {
    name: "otpverificationscreen.note1"
  },
  {
    name: "otpverificationscreen.note2"
  }
];
export const STEPDATA = [
  {
    name: "startverification.step1",
    gradient: "orange"
  },
  {
    name: "startverification.step2",
    gradient: "primary"

  },
  {
    name: "startverification.step3",
    gradient: "green"
  }
];
export const ABOUTUSDATA = [
  {
    text1: "aboutus.info1",
    text2: "aboutus.info1sub"
  },
  {
    text1: "aboutus.info2",
    text2: "aboutus.info2sub"
  },
  {
    text1: "aboutus.info3",
    text2: "aboutus.info3sub"
  },
  {
    text1: "aboutus.info4",
    text2: "aboutus.info4sub"
  },
];
export const USERAGGREMENT = [
  {
    text1: "useraggrement.defination0",
  },
  {
    text1: "useraggrement.defination1",
  },
  {
    text1: "useraggrement.defination2",
  },
  {
    text1: "useraggrement.defination3",
  },
  {
    text1: "useraggrement.defination4",
  },
  {
    text1: "useraggrement.defination5",
  },
  {
    text1: "useraggrement.defination6",
  },
  {
    text1: "useraggrement.defination7",
  },
];

export const REPORTDATA = [
  {
    id: 1,
    name: "reports.activeuser",
    value: "1600",
    icon: "report_useractive",
    percentage: "+55",
    action: "",
    color: "green"
  },
  {
    id: 2,
    name: "reports.clickevents",
    value: "375",
    icon: "report_userclickevents",
    percentage: "+124",
    action: "",
    color: "orange"
  },
  {
    id: 3,
    name: "reports.purchases",
    value: "2300",
    icon: "report_userpurchases",
    percentage: "+15",
    action: "",
    color: "primary"
  },
  {
    id: 4,
    name: "reports.likes",
    value: "940",
    icon: "report_userlikes",
    percentage: "+90",
    action: "",
    color: "lightblue"
  }
];

export const REVIEWDATA = [
  {
    id: 43431,
    name: "John Michael",
    email: "johnmichael123@gmail.com",
    employed: "23/04/2019",
    reviewtype: "Positive",
    role: "Manager",
    profileimage: "profileimage"
  },
  {
    id: 43431,
    name: "John Michael",
    email: "johnmichael123@gmail.com",
    employed: "23/04/2019",
    reviewtype: "Neutral",
    role: "Manager",
    profileimage: "profileimage"
  },
  {
    id: 43431,
    name: "John Michael",
    email: "johnmichael123@gmail.com",
    employed: "23/04/2019",
    reviewtype: "Negative",
    role: "Manager",
    profileimage: "profileimage"
  }
]

export const RETRYDATA = [
  "retrymsg.text1",
  "retrymsg.text2",
  "retrymsg.text3",
  "retrymsg.text4"
]
export const PAGEDATA = [
  {
    id: 1,
    title: "common.front",
    icon: "frontPageicon",
  },
  {
    id: 2,
    title: "common.back",
    icon: "backpageicon",
  },
  {
    id: 3,
    title: "common.qrcode",
    icon: "qrcodepage",
  },
  {
    id: 4,
    title: "common.biographic",
    icon: "biographic",
  }
]
export const AuthorityDATA = [
"Barbia",
"Colombia",
"London",
"India"
]







export default {
  USERS,
  VERIFCATIONCARD,
  APPLICATIONDATA,
  DEVICEDATA,
  IDENTITYDATA,
  USERDETAILS,
  CARDDATA,
  ACCOUNTDATA,
  READNOTIFICATION,
  UNREADNOTIFICATION,
  FIDO2DATA,
  LOGINREQUESTDATA,
  PAYMENTCARDS,
  OTHERCARDS,
  NOTEDATA,
  STEPDATA,
  ABOUTUSDATA,
  USERAGGREMENT,
  REPORTDATA,
  REVIEWDATA,
  RETRYDATA,
  PAGEDATA,
  AuthorityDATA
};
