/// <reference types="grecaptcha" />

const MAX_RETRIES = 3;

export const getRecaptchaToken = async (
  recaptchaSiteKey: string
): Promise<string> => {
  const getToken = async (retryCount = 0): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        if (retryCount >= MAX_RETRIES) {
          reject(new Error("Failed to load reCAPTCHA after maximum retries"));
          return;
        }
        setTimeout(() => {
          resolve(getToken(retryCount + 1));
        }, 1000);
        return;
      }
      grecaptcha.ready(function () {
        grecaptcha
          .execute(recaptchaSiteKey, {
            action: "submit",
          })
          .then(
            (token) => {
              resolve(token);
            },
            (err) => {
              reject(err);
            }
          );
      });
    });
  };

  return getToken();
};

export function remToPix(remVal: string) {
  if (remVal.includes("px")) {
    return remVal;
  }
  return `${parseFloat(remVal.replace("rem", "")) * 16}`;
}
