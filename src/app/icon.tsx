import { ImageResponse } from "next/og";
import { OgLogoMark } from "@/lib/ogLogoMark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16324F",
          borderRadius: 9,
        }}
      >
        <OgLogoMark size={22} />
      </div>
    ),
    { ...size },
  );
}
