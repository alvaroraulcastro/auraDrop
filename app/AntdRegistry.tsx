"use client";

import React from "react";
import { ConfigProvider } from "antd";
import esES from "antd/locale/es_ES";

const theme = {
  token: {
    colorPrimary: "#0d9488",
    borderRadius: 8,
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
  },
};

export function AntdRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider locale={esES} theme={theme}>
      {children}
    </ConfigProvider>
  );
}
