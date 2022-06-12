declare global {
  namespace NodeJS {
    interface ProcessEnv {
      user: string;
      pass: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}

export {};
