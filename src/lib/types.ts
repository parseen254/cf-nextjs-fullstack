export interface Theme {
  colorScheme?: "auto" | "dark" | "light";
  logo?: string;
  brandColor?: string;
  buttonText?: string;
}

export type Awaitable<T> = T | PromiseLike<T>;

interface EmailConfig {
  id: string;
  type: "email";
  name: string;
  from?: string;
  maxAge?: number;
  sendVerificationRequest: (params: {
    identifier: string;
    url: string;
    expires: Date;
    provider: EmailConfig;
    token: string;
    theme: Theme;
    request: Request;
  }) => Awaitable<void>;
}

export interface sendVerificationRequestParams {
  identifier: string;
  url: string;
  provider: EmailConfig;
  theme: Theme;
}
