import "./Tag.css";
import "./TaskForm";

export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#03be51ff" },
    JavaScript: { backgroundColor: "#ff452cff" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      onClick={() => selectTag(tagName)}
      className="tag"
    >
      {tagName}
    </button>
  );
}
