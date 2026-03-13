"use client";

import React from "react";
import { ConfigProvider } from "antd";
import esES from "antd/locale/es_ES";

export function AntdRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider locale={esES}>
      {children}
    </ConfigProvider>
  );
}
