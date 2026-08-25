export const getEnv = (key: string, fallback = "") => {
  if (typeof window !== "undefined") {
    return fallback;
  }

  const value = process.env?.[key];
  return value && value.trim() ? value.trim() : fallback;
};

export const contactConfig = {
  resendApiKey: getEnv("RESEND_API_KEY"),
  resendFromEmail: getEnv("RESEND_FROM_EMAIL", "onboarding@resend.dev"),
  contactToEmail: getEnv("CONTACT_TO_EMAIL", "matthewsrickypro@gmail.com"),
};

export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.trim().length === 0) {
    return false;
  }

  return value.trim().length <= maxLength;
};

export const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

export const getErrorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    // @ts-ignore - defensive
    message = String((error as any).message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};
