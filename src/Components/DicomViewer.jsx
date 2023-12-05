import React from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneTools from "cornerstone-tools";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import * as dicomParser from "dicom-parser";
import { useRef } from "react";
import { useEffect } from "react";

cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

function DicomViewer({ dicomUrl }) {
  const dicomImageRef = useRef(null);

  useEffect(() => {
    const element = dicomImageRef.current;

    //Cornerstone araçlarını etkinleştir.
    cornerstoneTools.init();

    //DICOM görüntüsünü yükle ve göster
    function loadAndDisplayImage(url) {
      cornerstone.loadImage(url).then((image) => {
        cornerstone.displayImage(element, image);

        //Zoom ve diğer araçları etkinleştir
        cornerstoneTools.addTool(cornerstoneTools.ZoomTool);
        cornerstoneTools.setToolActive("Zoom", { mouseButtonMask: 1 });
      });
    }
    loadAndDisplayImage(dicomUrl);

    return () => {
      cornerstone.disable(element);
    };
  }, [dicomUrl]);
  return (
    <div ref={dicomImageRef} style={{ width: "512px", height: "512px" }}></div>
  );
}

export default DicomViewer;
