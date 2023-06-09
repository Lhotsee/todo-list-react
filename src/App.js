import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "zjeść zupkę", done: true },
    { id: 2, content: "uczyć się reacta", done: false },
  ]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);
  };

  const removeTasks = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks, {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id + 1,
      },
    ]);
  };

  return (
    <>
      <Container>
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask}/>} />
        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              removeTasks={removeTasks}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              toggleHideDoneTasks={toggleHideDoneTasks}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </>
  );
}

export default App;
