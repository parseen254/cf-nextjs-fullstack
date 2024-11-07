import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

import { getRequestContext } from "@cloudflare/next-on-pages";

// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const sesClient = () => {
  const { env } = getRequestContext();
  return new SESClient({
    region: REGION,
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY,
      secretAccessKey: env.AWS_SECRET_KEY,
    },
  });
};

const createSendEmailCommand = (
  toAddress: string,
  fromAddress: string,
  emailSubject: string,
  htmlEmail: string,
  textEmail: string
) => {
  return new SendEmailCommand({
    Destination: {
      CcAddresses: [],
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlEmail,
        },
        Text: {
          Charset: "UTF-8",
          Data: textEmail,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: emailSubject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [],
  });
};

export { sesClient, createSendEmailCommand };
