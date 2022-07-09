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
    readScreen:{
      title:"readscreen.title",
      subtitle:"readscreen.subtitle"
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
    readScreen:{
      title:"readscreen.title",
      subtitle:"readscreen.subtitledoc"
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
    readScreen:{
      title:"readscreen.title",
      subtitle:"readscreen.subtitlecertificate"
    }
  }
];


export default {
  USERS,
  VERIFCATIONCARD
};
