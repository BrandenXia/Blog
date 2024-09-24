type DaisyUITheme = {
  primary: string;
  "primary-content"?: string;
  secondary: string;
  "secondary-content"?: string;
  accent: string;
  "accent-content"?: string;
  neutral: string;
  "neutral-content"?: string;
  "base-100": string;
  "base-200"?: string;
  "base-300"?: string;
  "base-content"?: string;
  info: string;
  "info-content"?: string;
  success: string;
  "success-content"?: string;
  warning: string;
  "warning-content"?: string;
  error: string;
  "error-content"?: string;
};

const light: DaisyUITheme = {
  primary: "#60a5fa",
  secondary: "#fdba74",
  accent: "#818cf8",
  neutral: "#474747",
  "base-100": "#ffffff",
  "base-200": "#f9fafb",
  "base-300": "#f4f5f7",
  info: "#38bdf8",
  success: "#34d399",
  warning: "#fcd34d",
  error: "#ef4444",
};

// TODO: Design dark theme
const dark = "TODO";

export { light, dark };
