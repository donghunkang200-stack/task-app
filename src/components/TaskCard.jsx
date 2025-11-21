import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

export default function TaskCard({ title, tags, handleDelete, index }) {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags &&
            tags.map((tag, index) => (
              <Tag key={index} tagName={tag} selected={true} />
            ))}
        </div>
        <div onClick={() => handleDelete(index)} className="task_delete">
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
}
