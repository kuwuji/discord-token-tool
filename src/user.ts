import { spinner, log, outro } from "@clack/prompts";
import { askToken, discordMe } from "./ui";

interface DiscordUser {
    id: string;
    username: string;
    global_name: string | null;
    email?: string | null;
    verified?: boolean;
    mfa_enabled?: boolean;
}

export function idToDate(userId: string): Date {
    const discordEpoch = 1420070400000;
    const timestamp = Number(BigInt(userId) >> 22n) + discordEpoch;
    return new Date(timestamp);
}

export async function getUser(token: string): Promise<DiscordUser | null> {
    const res = await discordMe("", token);

    if (!res.ok) return null;

    return (await res.json()) as DiscordUser;
}

const token = await askToken("Enter your Discord token");

const s = spinner();
s.start("Fetching user data...");

const user = await getUser(token);

if (!user) {
    s.stop("Token rejected by Discord");
    log.error("Discord says no. This token is dead, expired, or never existed.");
    outro("Grab a fresh one and try again 🔄");
    process.exit(1);
}

s.stop("Token is alive");
log.success(`Got you, ${user.global_name ?? user.username}.`);
log.info(`🪪  Username    ${user.username}`);
log.info(`💬  Display     ${user.global_name ?? "not set"}`);
log.info(`📧  Email       ${user.email ?? "hidden (missing email scope)"}`);
log.info(`✅  Verified    ${user.verified === undefined ? "unknown" : user.verified ? "yes" : "no"}`);
log.info(`🔐  2FA         ${user.mfa_enabled === undefined ? "unknown" : user.mfa_enabled ? "on" : "off"}`);
log.info(`🎂  Born        ${idToDate(user.id).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`);

outro("Token checked. Stay safe out there 🦊");