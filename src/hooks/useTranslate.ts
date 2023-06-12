import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import { IUseTranslate } from "@/hooks/interfaces";

const useTranslate = (): IUseTranslate => {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>("");

  const translate = (key: string): string => t(key);

  const changeLanguage = async (lang: string): Promise<void> => {
    await i18n.changeLanguage(lang);
    setLang(lang);
    await AsyncStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const fetchLanguage = async (): Promise<void> => {
      const storedLang = await AsyncStorage.getItem("lang");
      if (storedLang) {
        i18n.changeLanguage(storedLang);
        setLang(storedLang);
      } else {
        await AsyncStorage.setItem("lang", "en");
        i18n.changeLanguage("en");
        setLang("en");
      }
    };

    fetchLanguage();
  }, []);

  return { lang, translate, changeLanguage };
};

export default useTranslate;
