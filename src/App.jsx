import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import todoIcon from "./assets/free-icon-font-edit-3917471.png";
import doingIcon from "./assets/free-icon-font-flame-3917741.png";
import doneIcon from "./assets/free-icon-font-list-check-3914414.png";
import { useEffect, useState } from "react";

const saveTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []); //저장된 할일이 있으면 불러오고 없으면 빈배열
  //할일 삭제 함수(인덱스번호 입력)
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  //할일이 변경될때마다 실행
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          handleDelete={handleDelete}
          tasks={tasks}
          status="todo"
          title="할일"
          icon={todoIcon}
        />
        <TaskColumn
          handleDelete={handleDelete}
          tasks={tasks}
          status="doing"
          title="진행중"
          icon={doingIcon}
        />
        <TaskColumn
          handleDelete={handleDelete}
          tasks={tasks}
          status="done"
          title="완료"
          icon={doneIcon}
        />
      </main>
    </div>
  );
}

export default App;
