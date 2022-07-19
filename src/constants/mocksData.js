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
  }
];

export const APPLICATIONDATA = [
  {
    id: 1,
    name: "applicationscreen.office",
    image: "officeIcon"
  },
  {
    id: 2,
    name: "applicationscreen.box",
    image: "boxIcon"
  },
  {
    id: 3,
    name: "applicationscreen.google",
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
    title: "Identities",
    data: [
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
export const USERDETAILS = {
  "Date Of Birth:": "05/20/1981",
  "Email": "robertjohnson123@gmail.com",
  "Gender": "Male",
  "ID Number": "00000000020",
  "Date Of Expiry": "01/26/2024",
  "Date Of Issuance": "02/10/2022",
  "Agency Card Sn": "MTS14775029",
  "Issuer IN": "9999"
};
export const CARDDATA = [
  {
    id: 1,
    icon: "dashPersonalIcon",
    name: 'Personal',
    documentData: [
      {
        title:'Data1',
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
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
            {
              id: 4,
              name: "OTP",
              icon: "otpIcon"
            },
            ]
          }
        ]
      },
      {
        title:'Data2',
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            authdata: [{
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
            ]
          }
        ]
      }
    ],
  },
  {
    id: 2,
    name: 'Employment',
    icon: "dashemployementIcon",
    documentData: [
      {
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            authdata: [{
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
            ]
          }
        ]
      }
    ],
  },
  {
    id: 3,
    name: 'Financial',
    icon: "dashfinancialIcon",
    documentData: [
      {
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            authdata: [{
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
            ]
          }
        ]
      }
    ],
  },
  {
    id: 4,
    name: 'Certifications',
    icon: "dashcertificateIcon",
    documentData: [
      {
        data: [
          {
            id: 1,
            isactive: true,
            isverified: true,
            image: "dlimage",
            authdata: [{
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
            ]
          }
        ]
      }
    ],
  }
];

export const ACCOUNTDATA = [
  {
    id:1,
    name:"Recommended Settings ",
    description:"These are the most important settings",
    icon:"normalSettingIcon",
    subData:[
      {
        id:1,
        type:1,
        name:"Dark Mode"
      },
      {
        id:2,
        type:2,
        name:"Language"
      },
      {
        id:3,
        type:3,
        name:"Feedback"
      },
      {
        id:4,
        type:3,
        name:"Notifications"
      },
      {
        id:5,
        type:3,
        name:"Reports"
      },
      {
        id:6,
        type:3,
        name:"Consent Settings"
      },
    ]
  },
  {
    id:2,
    name:"Payment Settings ",
    description:"These are also important settings",
    icon:"paymentsettingIcon",
    subData:[
      {
        id:1,
        type:3,
        name:"Manage Payment Options"
      },
    ]
  },
  {
    id:3,
    name:"Privacy Settings ",
    description:"Third most important settings",
    icon:"privacysettingIcon",
    subData:[
      {
        id:1,
        type:3,
        name:"User Agreement"
      },
      {
        id:2,
        type:3,
        name:"Privacy"
      },
      {
        id:3,
        type:3,
        name:"About"
      },
    ]
  }
]


export default {
  USERS,
  VERIFCATIONCARD,
  APPLICATIONDATA,
  DEVICEDATA,
  IDENTITYDATA,
  USERDETAILS,
  CARDDATA,
  ACCOUNTDATA
};
