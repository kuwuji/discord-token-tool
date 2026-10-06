import { select, isCancel, cancel } from "@clack/prompts";
import { askLang, t } from "./i18n";

const banner = `
 ▄▀▀▀█▀▀▄  ▄▀▀▀▀▄   ▄▀▀▄ █  ▄▀▀█▄▄▄▄  ▄▀▀▄ ▀▄ 
█    █  ▐ █      █ █  █ ▄▀ ▐  ▄▀   ▐ █  █ █ █ 
▐   █     █      █ ▐  █▀▄    █▄▄▄▄▄  ▐  █  ▀█ 
   █      ▀▄    ▄▀   █   █   █    ▌    █   █  
 ▄▀         ▀▀▀▀   ▄▀   █   ▄▀▄▄▄▄   ▄▀   █   
█                  █    ▐   █    ▐   █    ▐   
▐                  ▐        ▐        ▐        
`;
const purple = (s: string) => `\x1b[35m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;

function showBanner() {
    console.clear();
    console.log(purple(banner));
    console.log(dim("  Discord token checker · Kuwuji 🦊\n"));
}

showBanner();
await askLang();
showBanner();

await askLang();

const choice = await select({
    message: t("chooseCheck"),
    options: [
        { value: "bot", label: t("botToken") },
        { value: "user", label: t("userToken") },
    ],
});


if (isCancel(choice)) {
    cancel(t("bye"));
    process.exit(0);
}



if (choice === "bot") await import("./bot");
else await import("./user");