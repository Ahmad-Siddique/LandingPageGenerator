import { createContext, useState, useMemo } from "react";

export const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const selectedSection = useMemo(
    () => sections.find((s) => s.id === selectedSectionId) || null,
    [sections, selectedSectionId]
  );

  const getDefaultProps = (type) => {
    switch (type) {
      case "Hero":
        return {
          title: "Launch Your Startup",
          subtitle: "Transform your vision into reality",
          primaryBtn: "Get Started",
          secondaryBtn: "Learn More",
          image: "/default-hero.jpg",
          titleColor: "#000000",
          subtitleColor: "#4b5563",
          backgroundColor: "#ffffff",
          primaryColor: "#2563eb",
          secondaryColor: "#1e293b",
        };
      case "Features":
        return {
          title: "Our Awesome Features",
          features: [
            {
              icon: "🚀",
              heading: "Fast Launch",
              text: "Get started in minutes",
            },
            {
              icon: "🔒",
              heading: "Secure",
              text: "Industry-leading security",
            },
            {
              icon: "⚡",
              heading: "Lightning Fast",
              text: "Blazing performance",
            },
          ],
        };
      case "Testimonials":
        return {
          title: "What Our Users Say",
          testimonials: [
            {
              avatar: "",
              text: "Changed my workflow!",
              name: "John Doe",
              role: "Founder",
            },
          ],
        };
      case "CTA":
        return {
          heading: "Ready to get started?",
          subheading: "Sign up today",
          buttonText: "Get Started",
          buttonLink: "#",
        };
      default:
        return {};
    }
  };

  const addSection = (sectionConfig) => {
    let type, variant;
    if (typeof sectionConfig === "object") {
      type = sectionConfig.type;
      variant = sectionConfig.variant;
    } else {
      type = sectionConfig;
      variant = `${type}1`;
    }

    const newSection = {
      id: Date.now(),
      type,
      variant,
      props: getDefaultProps(type),
    };

    setSections((prev) => {
      const newSections = [...prev, newSection];
      setHistory((h) => [...h, prev]);
      return newSections;
    });
    setSelectedSectionId(newSection.id);
    setFuture([]);
  };

  const saveState = (newSections) => {
    setHistory((h) => [...h, sections]);
    setFuture([]);
    setSections(newSections);
  };

  const undo = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setFuture((prev) => [sections, ...prev]);
      setSections(previous);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const next = future[0];
      setFuture((prev) => prev.slice(1));
      setHistory((prev) => [...prev, sections]);
      setSections(next);
    }
  };

  return (
    <BuilderContext.Provider
      value={{
        sections,
        setSections,
        selectedSection,
        selectedSectionId,
        setSelectedSectionId,
        addSection,
        history,
        future,
        saveState,
        undo,
        redo,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
