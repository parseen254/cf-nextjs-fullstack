import { Theme, sendVerificationRequestParams } from "@/lib/types";
import { createSendEmailCommand, sesClient } from "@/lib/sesClient";
import { html, text } from "@/lib/utils/emails";

export async function sendVerificationRequest(
  params: sendVerificationRequestParams
) {
  const { identifier: to, provider, url, theme } = params;
  const { host } = new URL(url);

  const sendEmailCommand = createSendEmailCommand(
    to,
    "no-reply@parseen.dev",
    `Sign in to ${host}`,
    html({ url, host, theme }),
    text({ url, host })
  );

  try {
    await sesClient().send(sendEmailCommand);
  } catch (caught) {
    throw new Error("Resend error: " + JSON.stringify({ caught }));
  }
}
