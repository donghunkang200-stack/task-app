import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

export default function TaskForm({ setTasks }) {
  //   const [task, setTask] = useState("");
  //   const [status, setStatus] = useState("");
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]); //새로운 할일 추가
    setTaskData({ task: "", status: "todo", tags: [] }); //입력폼 처음처럼 초기화
  }

  function selectTag(tag) {
    //이미 같은 태그가 배열에 있다면 제거, 없다면 추가
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  }
  console.log(taskData.tags); //태그 선택을 확인

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  //입력이 바뀔때마다 실행함수
  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          value={taskData.task}
          onChange={handleChange}
          type="text"
          className="task_input"
          placeholder="할일을 입력해주세요"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              selectTag={selectTag}
              selected={checkTag("HTML")}
              tagName="HTML"
            />
            <Tag
              selectTag={selectTag}
              selected={checkTag("CSS")}
              tagName="CSS"
            />
            <Tag
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
              tagName="JavaScript"
            />
            <Tag
              selectTag={selectTag}
              selected={checkTag("REACT")}
              tagName="REACT"
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              onChange={handleChange}
              className="task_status"
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>
            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
