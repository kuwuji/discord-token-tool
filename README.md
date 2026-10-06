<div align="center">

```
 ▄▀▀▀█▀▀▄  ▄▀▀▀▀▄   ▄▀▀▄ █  ▄▀▀█▄▄▄▄  ▄▀▀▄ ▀▄ 
█    █  ▐ █      █ █  █ ▄▀ ▐  ▄▀   ▐ █  █ █ █ 
▐   █     █      █ ▐  █▀▄    █▄▄▄▄▄  ▐  █  ▀█ 
   █      ▀▄    ▄▀   █   █   █    ▌    █   █  
 ▄▀         ▀▀▀▀   ▄▀   █   ▄▀▄▄▄▄   ▄▀   █   
█                  █    ▐   █    ▐   █    ▐   
▐                  ▐        ▐        ▐        
```

# 🦊 Discord Token Tool

**Check if a Discord token is alive, right from your terminal.**
Pretty prompts, instant answers, and 5 languages.

![Version](https://img.shields.io/badge/version-1.1.0-8A2BE2?style=for-the-badge)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

---

## ✨ Features

- 🤖 **Bot token check**: is it valid, and which bot does it belong to
- 👤 **User token check**: username, display name, email, verification, 2FA and account creation date
- 🌍 **5 languages**: English, Français, Español, Русский, Português
- 🎛️ **Interactive menu**: no commands to remember, just pick what you want to check
- 🔒 **Hidden input**: your token is masked while you paste it
- ⚡ **Zero config**: nothing is saved, nothing to set up

## 🚀 Getting started

You need [Bun](https://bun.sh) installed.

```sh
git clone https://github.com/kuwuji/discord-token-tool.git
cd discord-token-tool
bun install
```

## 🕹️ Usage

Launch the full menu (language, then bot or user):

```sh
bun run start
```

Or jump straight to what you need:

```sh
bun run bot    # check a bot token
bun run user   # check a user token
```

## 🌍 Languages

| Code | Language  |
| ---- | --------- |
| `en` | English   |
| `fr` | Français  |
| `es` | Español   |
| `ru` | Русский   |
| `pt` | Português |

The language is asked at every launch and never saved.

Want to add yours? Create a file in `src/locales/` that copies `en.ts`, then register it in `src/i18n.ts`. TypeScript will tell you if a key is missing.

## 🛡️ Disclaimer

This tool is meant to check **your own tokens**. Your token is only sent to the Discord API (`discord.com`), and is never stored or logged. Never share a token with anyone, and never commit one to a repository.


## List Road

- Bot.ts []
- More informations []
- More features []


## 👤 Author

Made by **[Kuwuji](https://github.com/kuwuji)** 🦊

If this project helped you, a ⭐ is always appreciated!

## 📝 License

Released under the [MIT](LICENSE) license.