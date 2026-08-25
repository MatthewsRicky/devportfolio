"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

interface ProjectQRCodeProps {
  url: string;
  size?: number;
}

export default function ProjectQRCode({ url, size = 140 }: ProjectQRCodeProps) {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size,
      margin: 2,
      errorCorrectionLevel: "H",
    })
      .then(setQrCode)
      .catch(console.error);
  }, [url, size]);

  if (!qrCode) {
    return (
      <div
        className="flex items-center justify-center rounded-lg bg-neutral-100"
        style={{ width: size, height: size }}
      >
        <span className="text-xs text-neutral-400">Loading...</span>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open project"
    >
      <img
        src={qrCode}
        alt="QR code for project"
        width={size}
        height={size}
        className="rounded-lg"
      />
    </a>
  );
}
