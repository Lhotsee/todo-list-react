import {useState} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zjeść zupkę", done: true },
  { id: 2, content: "uczyć się reacta", done: false },
];
const hideDoneTasks = false;

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks)
  }
   
  return (
    <>
      <Container>
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDoneTasks={toggleHideDoneTasks} />
          }
        />
      </Container>
    </>
  );
}

export default App;