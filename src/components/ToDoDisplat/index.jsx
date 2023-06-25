import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TODO_SCHEMA } from '../../utils/validationSchemas';

const initialValues = {
  writeTask: '',
};

function ToDoDisplay() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const onSumbit = (values, formikBag) => {
    const newTask = {
      task: values.writeTask,
      isCompleted: false,
    };
    setTodos([...todos, newTask]);
    console.log(todos);
    formikBag.resetForm();
  };
  const DeleteTask = () => {
    
  }
  return (
    <Formik
      onSubmit={onSumbit}
      initialValues={initialValues}
      validationSchema={TODO_SCHEMA}
    >
      {(props) => {
        return (
          <Form>
            <h1>TODO</h1>
            <Field name="writeTask" placeholder="write a task" />
            {todos.map((ele, index) => (
              <li key={index}>{ele.task}</li>
            ))}
            <ErrorMessage name="writeTask">
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
            <button type="submit">Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ToDoDisplay;
