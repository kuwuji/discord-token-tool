import { intro, password, isCancel, cancel } from "@clack/prompts";

export async function askToken(title: string): Promise<string> {
    intro(title);

    const token = await password({
        message: "Enter your token",
        validate: (v) => (!v ? "Token cannot be empty" : undefined),
    });

    if (isCancel(token)) {
        cancel("Operation cancelled.");
        process.exit(0);
    }
    
    return token;
}

export function discordMe(prefix: "Bot" | "Bearer" | "", token: string) {
    return fetch("https://discord.com/api/v10/users/@me", {
        headers: {
            Authorization: prefix ? `${prefix} ${token}` : token,
        },
    });
}