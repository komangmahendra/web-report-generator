import axios from "axios";
import { useState } from "react";
import { Textarea } from "./components/ui/textarea";
import Button from "./components/Button";
import { Loader2 } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

function App() {
  const [reportText, setReportText] = useState("");
  const [loading, setLoading] = useState(false);
  function renderHtml(htmlText: string) {
    const iframe = document.getElementById(
      "preview-pane"
    ) as HTMLIFrameElement | null;
    if (!iframe) return;

    iframe.src = "data:text/html;charset=utf-8," + encodeURIComponent(htmlText);
  }

  const onGenerateHTML = async () => {
    try {
      setLoading(true);
      const result = await axios.post("http://localhost:3000/generate", {
        report: reportText,
      });
      renderHtml(result.data.received);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="border w-screen min-w-screen max-w-screen"
      >
        <ResizablePanel defaultSize={50}>
          <div className="space-y-2 p-10 w-full">
            <h2 className="text-2xl font-bold">Web Report Generator</h2>
            <div className="mt-5">
              <p className="text-sm font-semibold text-neutral-700 mb-1">
                Text Report
              </p>
              <Textarea
                className="h-100"
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
              />
            </div>
            <Button
              className="w-full mt-2"
              onClick={onGenerateHTML}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Generate"}
            </Button>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="w-full min-w-[50vw] bg-neutral-50 flex justify-center items-center">
            <iframe
              id="preview-pane"
              sandbox="allow-scripts"
              style={{ width: "100%", height: "100vh" }}
            ></iframe>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default App;
