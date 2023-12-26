import React, { useEffect, useRef, useState } from "react";
import cornerstone from "cornerstone-core";
import * as cornerstoneTools from "cornerstone-tools";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import * as dicomParser from "dicom-parser";
import dicomFile from "./00000001";
import cornerstoneMath from "cornerstone-math";
import Hammer from "hammerjs";

//
function DicomViewer() {
  const dicomImageRef = useRef(null);

  useEffect(() => {
    //CornerstoneTools
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneTools.external.Hammer = Hammer;
    cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

    //cornerstone Tools initialization
    cornerstoneTools.init();
    const fontFamily =
      "Work Sans, Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica, Arial, Lucida Grande, sans-serif";
    cornerstoneTools.textStyle.setFont("16px ${fontFamily}");
    cornerstoneTools.toolStyle.setToolWidth(2);
    cornerstoneTools.toolColors.setToolColor("rgb(255, 255, 0)");
    cornerstoneTools.toolColors.setActiveColor("rgb(0,255,0)");

    cornerstoneTools.store.state.touchProximity = 40;

    //IMAGE LOADER
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
    cornerstoneWADOImageLoader.webWorkerManager.initialize({
      maxWebWorkers: navigator.hardwareConcurrency || 1,
      startWebWorkersOnDemand: true,
      taskConfiguration: {
        decodeTask: {
          initializeCodecsOnStartup: false,
          usePDFJS: false,
          strict: false,
        },
      },
    });
    //
    window.cornerstone = cornerstone;
    window.cornerstoneTools = cornerstoneTools;
  }, []);

  function handleFileChange(event) {
    const files = event.target.files;
    if(files.length > 0) {
      const file = files[0];
      loadLocalFile(file).then((imageId) => {
        //Load and display the image
        cornerstone.loadImage(imageId).then((image) => {
          cornerstone.displayImage(dicomImageRef.current, image);
        });
      }).catch((error) => {
        console.error("Error loading DICOM file: ", error);
      });
    }
  }
  function loadLocalFile(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = function (event) {
        const imageId =
          cornerstoneWADOImageLoader.wadouri.fileManager.addBuffer(
            event.target.result
          );
        resolve(imageId);
      };
      fileReader.onerror = function (event) {
        reject(event.target.error);
      };
      fileReader.readAsArrayBuffer(file);
    });
  }

  return (
    <div id="dicomImage" style={{ width: "512px", height: "512px" }}>
      <input type="file" id="dicomFile" onChange={handleFileChange} multiple />
    </div>
  );
}

export default DicomViewer;
