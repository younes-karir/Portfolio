import i18next from '../../../Helpers/i18next/i18n'

export const Education = {
  name: "ed",
  content: [
    {
      id: 1,
      year: i18next.t('firstEducationDate'),
      title: i18next.t('firstEducationTitle'),
      sub: i18next.t('firstEducationSub'),
      details: [i18next.t('firstEducationDetails_1')],
    },
    {
      id: 2,
      year: i18next.t('secoundEducationDate'),
      title: i18next.t('secoundEducationTitle'),
      sub: i18next.t('secoundEducationSub'),
      details: [i18next.t('secoundEducationDetails_1')],
    },
    {
      id: 3,
      year: i18next.t('thirdEducationDate'),
      title: i18next.t('thirdEducationTitle'),
      sub: i18next.t('thirdEducationSub'),
      details: [i18next.t('thirdEducationDetails_1')],
    }
  ],
};

export const Experience = {
  name: "ex",
  content: [
    {
      id: 1,
      year: i18next.t('firstJobDate'),
      title: i18next.t('firstJobTitle'),
      sub: i18next.t('firstJobSub'),
      details: [
        i18next.t('firstJobDetails_1'),
        i18next.t('firstJobDetails_2'),
        i18next.t('firstJobDetails_3'),
        i18next.t('firstJobDetails_4'),
      ],
    },{
      id: 2,
      year: i18next.t('secoundJobDate'),
      title: i18next.t('secoundJobTitle'),
      sub: i18next.t('secoundJobSub'),
      details: [
        i18next.t('secoundJobDetails_1'),
        i18next.t('secoundJobDetails_2'),
      ],
    },
  ],
};

export const Awards = {
  name: "aw",
  content: [
    {
      id: 1,
      source :"IBM",
      year: i18next.t('fifthCertificateDate'),
      title: i18next.t('fifthCertificateTitle'),
      CrId: i18next.t('fifthCertificateCredentialId'),
      link : "https://www.coursera.org/account/accomplishments/records/7JW8M6MB98EA",

    },
    {
      id: 2,
      source :"UDEMY",
      year: i18next.t('firstCertificateDate'),
      title: i18next.t('firstCertificateTitle'),
      CrId: i18next.t('firstCertificateCredentialId'),
      link : "https://www.udemy.com/certificate/UC-83e4dfea-dc8d-4e0a-936f-5f3ddd6a0b94/",

    },
    {
      id: 3,
      source :"UDEMY",
      year: i18next.t('secoundCertificateDate'),
      title: i18next.t('secoundCertificateTitle'),
      CrId: i18next.t('secoundCertificateCredentialId'),
      link : "https://www.udemy.com/certificate/UC-5d747795-0b3f-493e-93c6-d06579c7b442/",

    },
    {
      id: 4,
      source :"UDEMY",
      year: i18next.t('thirdCertificateDate'),
      title: i18next.t('thirdCertificateTitle'),
      CrId: i18next.t('thirdCertificateCredentialId'),
      link : "https://www.udemy.com/certificate/UC-a23a3f8e-4c8b-40ca-b136-552888cd8ae8/",

    }
    ,
    {
      id: 5,
      year: i18next.t('fourthCertificateDate'),
      title: i18next.t('fourthCertificateTitle'),
      CrId: i18next.t('fourthCertificateCredentialId'),
      link : "https://www.udemy.com/certificate/UC-ef50bcb3-6655-47a5-90be-3d0e5fff88cd/",

    }
  ],
};
