import { select, isCancel, cancel } from "@clack/prompts";
import { en, type Key } from "./locales/en";
import { es } from "./locales/es";
import { ru } from "./locales/ru";
import { fr } from "./locales/fr";
import { pt } from "./locales/pt";

const langs = {
    en: en,
    es: es,
    ru: ru,
    fr: fr,
    pt: pt,
};

export type Lang = keyof typeof langs;

const languages: Record<Lang, { label: string; locale: string }> = {
    en: { label: "English", locale: "en-GB" },
    es: { label: "Español", locale: "es-ES" },
    ru: { label: "Русский", locale: "ru-RU" },
    fr: { label: "Français", locale: "fr-FR" },
    pt: { label: "Português", locale: "pt-BR" },
};

let current: Lang = "en";
let choosen = false;

export const getLocale = () => languages[current].locale;

export function t(key: Key, vars: Record<string, string> = {}): string {
    let text: string = langs[current][key];
    for (const [name, value] of Object.entries(vars)) {
        text = text.replaceAll(`{${name}}`, value);
    }
    return text;
}


export async function askLang() {
    if (choosen) return;
    const lang = await select({
        message: "Language / Langue / Idioma / Язык",
        options: (Object.keys(languages) as Lang[]).map((code) => ({
            value: code,
            label: languages[code].label,
        })),
    });

    if (isCancel(lang)) {
        cancel("👋");
        process.exit(0);
    }

    current = lang;
    choosen = true;
}