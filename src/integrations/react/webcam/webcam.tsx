/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
// import { Directory, Encoding, Filesystem } from "@capacitor/filesystem";
import { useCallback, useRef } from "react";
import WebcamComponent from "react-webcam";

const ReactWebcam = () => {
  const videoConstraints: MediaTrackConstraints = {
    width: 800,
    height: 800,
    facingMode: "user",
  };

  const webcamRef = useRef<WebcamComponent & HTMLVideoElement>(null);

  const downloadPhoto = (dataUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    link.click();
  };

  // const savePhoto = async (dataUrl: string, fileName: string) => {
  //   await Filesystem.writeFile({
  //     path: fileName,
  //     data: dataUrl,
  //     directory: Directory.Data,
  //     encoding: Encoding.UTF8,
  //   });
  // };

  const capture = useCallback(() => {
    // const fileName = Date.now() + ".png";
    const photo: string = webcamRef.current?.getScreenshot() as string;
    console.log("photo", photo);
    downloadPhoto(photo, "myImage.png");
    // savePhoto(photo, fileName);
  }, [webcamRef]);

  return (
    <>
      <WebcamComponent
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        width={1280}
        videoConstraints={videoConstraints}
        screenshotQuality={1}
        mirrored={true}
        imageSmoothing={true}
      />
      <div className="mt-10 flex justify-center">
        <button onClick={capture}>Capture photo</button>
      </div>
    </>
  );
};

export const Webcam = qwikify$(ReactWebcam, { eagerness: "load" });
