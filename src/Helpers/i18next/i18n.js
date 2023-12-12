import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Fr } from "./Data/Fr";
import { De } from "./Data/De";
import { En } from "./Data/Eng";


import Store from "../../Store/Store";



const resources = {
  en: En,
  fr: Fr,
  de: De,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: Store.getState().language.acteul,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
