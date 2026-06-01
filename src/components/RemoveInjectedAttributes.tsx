"use client";
import { useEffect } from "react";

export default function RemoveInjectedAttributes() {
  useEffect(() => {
    try {
      const attr = "cz-shortcut-listen";
      if (typeof document !== "undefined" && document.body?.hasAttribute(attr)) {
        document.body.removeAttribute(attr);
      }
    } catch {
      // ignore
    }
  }, []);

  return null;
}
