import { ImageResponse } from "next/og";
import { OgLogoMark } from "@/lib/ogLogoMark";

export function GET() {
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
    { width: 32, height: 32 },
  );
}
