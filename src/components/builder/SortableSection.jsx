import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableSection({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: "relative",
    background: isDragging ? "#f6f7fa" : undefined,
    borderRadius: "0.75rem",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {/* Minimal drag handle */}
      <div
        {...listeners}
        className="
          absolute left-2 top-2 w-7 h-7 flex items-center justify-center
          rounded-full z-20 shadow-sm bg-gray-100
          cursor-pointer active:cursor-grabbing
          transition
          hover:bg-gray-200
        "
        title="Drag section"
        style={{ userSelect: "none" }}
      >
        {/* Dots icon */}
        <svg
          width="16"
          height="16"
          fill="currentColor"
          className="text-gray-400"
        >
          <circle cx="4" cy="4" r="1.5" />
          <circle cx="12" cy="4" r="1.5" />
          <circle cx="4" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      </div>
      {/* Section content */}
      <div className="pl-12 pr-2 pt-2 pb-2">{children}</div>
    </div>
  );
}
