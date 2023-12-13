import React, { useEffect, useRef, useState } from 'react';
import  cornerstone from 'cornerstone-core';
import * as cornerstoneTools from 'cornerstone-tools';
//import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
// import * as dicomImageLoader from 'dicom-image-loader';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import * as dicomParser from 'dicom-parser';


cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

cornerstoneTools.external.cornerstone = cornerstone;


// dicomImageLoader.external.cornerstone = cornerstone;
// dicomImageLoader.external.dicomParser = dicomParser; 

function DicomViewer() {

    //OHIFViewer-----------------------------------------------------------
    // const ohifViewerUrl = 'http://localhost:8080';
    // const dicomFile = '/00000001';
    //OHIF Viewer URL + DICOM dosya adını birleştirme
    // const viewerUrl = '${ohifViewerUrl}/viewer/${dicomFile}';
    //-------------------------------------------------------------

    //Eski cornerstone----------------------------------------- 
    const dicomImageRef = useRef(null);
    const dicomUrl = process.env.PUBLIC_URL + '/00000001'; // DICOM dosyasının URL'si

    useEffect(() => {
        const element = dicomImageRef.current;

        cornerstoneTools.init();

        function loadAndDisplayImage(url) {
            cornerstone.loadImage(url).then((image) => {
                cornerstone.displayImage(element, image);
                
                cornerstoneTools.addTool(cornerstoneTools.ZoomTool);
                cornerstoneTools.setToolActive('Zoom', {mouseButtonMask: 1});
            });
        }
        loadAndDisplayImage(dicomUrl);
        
        return () => {
            cornerstone.disable(element);
        };
    }, [dicomUrl]);

    
    return (
        <div ref={dicomImageRef} style={{width:"512px", height:"512px"}}></div>
        
    );

}

export default DicomViewer;



