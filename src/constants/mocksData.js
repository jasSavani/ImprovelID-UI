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
    name:"accountpage.recommendsetting",
    description:"accountpage.recomanddescription",
    icon:"normalSettingIcon",
    subData:[
      {
        id:1,
        type:1,
        name:"accountpage.darkmode"
      },
      {
        id:2,
        type:2,
        name:"accountpage.language"
      },
      {
        id:3,
        type:3,
        name:"accountpage.feedback"
      },
      {
        id:4,
        type:3,
        name:"accountpage.notification"
      },
      {
        id:5,
        type:3,
        name:"accountpage.reports"
      },
      {
        id:6,
        type:3,
        name:"accountpage.consentsetting"
      },
    ]
  },
  {
    id:2,
    name:"accountpage.paymentsetting",
    description:"accountpage.paymentdescription",
    icon:"paymentsettingIcon",
    subData:[
      {
        id:1,
        type:3,
        name:"accountpage.managepayment"
      },
    ]
  },
  {
    id:3,
    name:"accountpage.privacysetting",
    description:"accountpage.privacydescription",
    icon:"privacysettingIcon",
    subData:[
      {
        id:1,
        type:3,
        name:"accountpage.useraggrement"
      },
      {
        id:2,
        type:3,
        name:"accountpage.privacy"
      },
      {
        id:3,
        type:3,
        name:"accountpage.about"
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
