/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const videoConstraints: MediaTrackConstraints = {
    width: 800,
    height: 800,
    facingMode: "user",
  };

  const webcamRef = useRef<Webcam & HTMLVideoElement>(null);

  const downloadImage = (dataUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    link.click();
  };

  const capture = useCallback(() => {
    const image: string = webcamRef.current?.getScreenshot() as string;
    console.log("image", image);
    downloadImage(image, "myImage.png");
  }, [webcamRef]);
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        width={1280}
        videoConstraints={videoConstraints}
        screenshotQuality={0.5}
        imageSmoothing={true}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={capture}>Capture photo</button>
      </div>
    </>
  );
};

export const QWebcam = qwikify$(WebcamComponent, { eagerness: "load" });
