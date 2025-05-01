import { BuilderProvider } from "../context/BuilderContext";
import AddSectionPanel from "../components/builder/AddSectionPanel";
import BuilderCanvas from "../components/builder/BuilderCanvas";
import SectionEditor from "../components/builder/SectionEditor";
import ExportButton from "../components/htmlexport/ExportButton";
import PreviewButton from "../components/htmlexport/PreviewButton";

export default function Home() {
  return (
    <BuilderProvider>
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Minimalistic Header */}
        <header className="fixed w-full z-50 bg-white border-b border-gray-100">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-4">
            <span className="text-lg font-semibold tracking-tight text-gray-900 select-none">
              Landing Page Builder
            </span>
            <div className="flex gap-2">
              <PreviewButton />
              <ExportButton />
            </div>
          </div>
        </header>

        <div className="flex pt-20 h-screen">
          {/* Left Sidebar */}
          <aside className="w-64 fixed left-0 top-20 h-[calc(100vh-80px)] border-r border-gray-200 bg-white">
            <AddSectionPanel />
          </aside>
          {/* Main Canvas */}
          <main className="flex-1 mx-auto ml-64 mr-80 h-[calc(100vh-80px)] overflow-y-auto px-8 py-6">
            <BuilderCanvas />
          </main>
          {/* Right Sidebar */}
          <aside className="w-80 fixed right-0 top-20 h-[calc(100vh-80px)] border-l border-gray-200 bg-white">
            <SectionEditor />
          </aside>
        </div>
      </div>
    </BuilderProvider>
  );
}
