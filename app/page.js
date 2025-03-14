// import { FileUpload } from '@/components/file-upload';
import { DocumentViewerWrapper } from '@/components/document-viewer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Document Viewer</h1>
          <p className="text-muted-foreground">
            Upload and view various document types including PDF, DOCX, and images
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[300px,1fr]">
          <div className="space-y-4">
            <div className="p-4 bg-card rounded-lg border">
              <h2 className="font-semibold mb-2">Example Documents</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-primary hover:underline">
                    Sample PDF Document
                  </button>
                </li>
                <li>
                  <button className="text-primary hover:underline">
                    Sample DOCX Document
                  </button>
                </li>
                <li>
                  <button className="text-primary hover:underline">
                    Sample Image
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg border min-h-[600px] p-4">
            <DocumentViewerWrapper />
          </div>
        </div>
      </div>
    </main>
  );
}