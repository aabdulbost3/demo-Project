import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector"
import en from "./companents/json/language/en/translation.json"
import ru from "./companents/json/language/ru/translation.json"
import uz from "./companents/json/language/uz/translation.json"

i18next
.use(initReactI18next)
.use(languageDetector)
.init({
    resources:{
        ru:{
            translation:ru,
        },
        en:{
            translation:en,
        },
        uz:{
            translation:uz,
        }
    },
    lng: window.localStorage.getItem('i18nextLng'),
    fallbackLng:'ru',
    detection:{
        order:['htmlTag', 'cookie' ,'localStorage', 'path','subdomain'],
        caches:['cookie', 'localStorage']
    }
})
export default i18next