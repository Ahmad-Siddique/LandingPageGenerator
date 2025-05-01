import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useContext, useState } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import SectionPreview from "./SectionPreview";
import SortableSection from "./SortableSection";

export default function BuilderCanvas() {
  const { sections, setSections } = useContext(BuilderContext);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  // Undo/redo functionality
  const undo = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setFuture([sections, ...future]);
      setSections(previous);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const next = future[0];
      setFuture(future.slice(1));
      setHistory([...history, sections]);
      setSections(next);
    }
  };

  // Drag and drop handler
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setSections((prevSections) => {
      const oldIndex = prevSections.findIndex((s) => s.id === active.id);
      const newIndex = prevSections.findIndex((s) => s.id === over.id);
      const newSections = arrayMove(prevSections, oldIndex, newIndex);
      setHistory((h) => [...h, prevSections]);
      setFuture([]);
      return newSections;
    });
  };

  // Delete section
  const handleDelete = (id) => {
    setSections((prevSections) => {
      const newSections = prevSections.filter((section) => section.id !== id);
      setHistory((h) => [...h, prevSections]);
      setFuture([]);
      return newSections;
    });
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Undo/Redo Controls */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={undo}
          disabled={history.length === 0}
          className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={future.length === 0}
          className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
        >
          Redo
        </button>
      </div>

      {/* Drag-and-Drop Canvas */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={sections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {sections.map((section) => (
              <SortableSection key={section.id} id={section.id}>
                <div className="relative group">
                  {/* Delete Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(section.id);
                    }}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-600 shadow-sm"
                    draggable="false"
                    title="Delete section"
                  >
                    ×
                  </button>
                  <SectionPreview section={section} />
                </div>
              </SortableSection>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* Empty State */}
      {sections.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg font-medium">
            No sections yet - start building from the left panel
          </p>
        </div>
      )}
    </div>
  );
}
