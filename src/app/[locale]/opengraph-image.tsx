import { ImageResponse } from "next/og";
import { OgLogoMark } from "@/lib/ogLogoMark";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F3F8FA",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 260,
            height: 260,
            alignItems: "center",
            justifyContent: "center",
            background: "#16324F",
            borderRadius: 72,
          }}
        >
          <OgLogoMark size={176} />
        </div>
      </div>
    ),
    { ...size },
  );
}
