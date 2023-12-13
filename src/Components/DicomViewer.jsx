import React, { useEffect, useRef, useState } from 'react';
import  cornerstone from 'cornerstone-core';
import * as cornerstoneTools from 'cornerstone-tools';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import * as dicomParser from 'dicom-parser';


cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneTools.external.cornerstone = cornerstone;

//Web Worker Manager initialization
cornerstoneWADOImageLoader.webWorkerManager.initialize({
    maxWebWorkers: navigator.hardwareConcurrency || 1,
    startWebWorkersOnDemand: true,
    webWorkerPath: '/path/to/cornerstoneWADOImageLoaderWebWorker.js',
    taskConfiguration: {
        'decodeTask': {
            loadCodecsOnStartup: true,
            initializeCodecsOnStartup: false,
            codecsPath: '/path/to/cornerstoneWADOImageLoaderCodecs.js',
            usePDFJS: false,
        }
    }
});


function DicomViewer() {

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



