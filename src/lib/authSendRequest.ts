import { Theme, sendVerificationRequestParams } from "@/lib/types";
import { html, text } from "@/lib/utils/emails";

export async function sendVerificationRequest(
  params: sendVerificationRequestParams
) {
  const { identifier: to, provider, url, theme } = params;
  const { host } = new URL(url);
  // const res = await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${provider.apiKey}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: provider.from,
  //     to,
  //     subject: `Sign in to ${host}`,
  //     html: html({ url, host, theme }),
  //     text: text({ url, host }),
  //   }),
  // });

  // if (!res.ok)
  //   throw new Error("Resend error: " + JSON.stringify(await res.json()));

  // Implement AWS SES email sending logic
}
