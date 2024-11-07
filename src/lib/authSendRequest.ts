import { createSendEmailCommand, sesClient } from "@/lib/sesClient";
import { html, text } from "@/lib/utils/emails";

import { sendVerificationRequestParams } from "@/lib/types";

export async function sendVerificationRequest(
  params: sendVerificationRequestParams
) {
  const { identifier: to, provider, url, theme } = params;
  const { host } = new URL(url);

  const sendEmailCommand = createSendEmailCommand(
    to,
    provider.from as string,
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
