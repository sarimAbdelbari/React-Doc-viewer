'use client';
// import DocViewer, { PDFRenderer, PNGRenderer, MSDocRenderer  } from '@cyntler/react-doc-viewer';
import DocViewer, { DocViewerRenderers  } from '@cyntler/react-doc-viewer';// you can also use this
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

export function DocumentViewerWrapper() {
  const docs = [
    { uri: "/assets/sample.pdf", fileName: "Sample PDF", fileType: "pdf" },
    { uri: "/assets/sample2.docx", fileName: "Sample DOCX", fileType: "docx" },
    { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png", fileName: "Sample Image", fileType: "png" }
  ];
  

  return (
    <div className="h-full" style={{ height: '100%' }} > 
      <DocViewer
        documents={docs}
        // pluginRenderers={[PDFRenderer, PNGRenderer, MSDocRenderer]}
        pluginRenderers={DocViewerRenderers} // you can also use this
        style={{ height: '100%' }}
        config={{
          header: {
            disableFileName: false,
            retainURLParams: false
          }
        }}
      />
    </div>
  );
}