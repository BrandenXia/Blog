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
  primary: "#7782e6",
  secondary: "#fdba74",
  accent: "#60a5fa",
  neutral: "#474747",
  "base-100": "#ffffff",
  "base-200": "#f9fafb",
  "base-300": "#f4f5f7",
  info: "#38bdf8",
  success: "#34d399",
  warning: "#fcd34d",
  error: "#ef4444",
};

const dark: DaisyUITheme = {
  primary: "#40b99d",
  secondary: "#d04742",
  accent: "#2778dc",
  neutral: "#DDDEDF",
  "base-100": "#22262E",
  info: "#084093",
  success: "#1a9336",
  warning: "#bb962a",
  error: "#be3131",
};

export { light, dark };
