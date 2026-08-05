import { ImageResponse } from "next/og";

export const alt = "Hayden Lin — IT, Operations & Digital Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "78px",
        color: "#10243e",
        background: "linear-gradient(135deg, #eef8ff 0%, #f8fbff 55%, #fff4e8 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "22px", fontSize: 28, fontWeight: 700 }}>
        <div style={{ display: "flex", width: 64, height: 64, borderRadius: 18, alignItems: "center", justifyContent: "center", background: "#2e6797", color: "white" }}>HL</div>
        Hayden Lin
      </div>
      <div style={{ display: "flex", marginTop: 58, maxWidth: 1000, fontSize: 68, lineHeight: 1.08, fontWeight: 700 }}>
        IT, Operations & Digital Solutions
      </div>
      <div style={{ display: "flex", marginTop: 30, maxWidth: 900, fontSize: 28, lineHeight: 1.45, color: "#526a82" }}>
        Turning real-world workflows into practical software and reliable digital experiences.
      </div>
      <div style={{ display: "flex", marginTop: 58, fontSize: 22, color: "#2e6797" }}>haydenlin.com.au</div>
    </div>,
    size,
  );
}
