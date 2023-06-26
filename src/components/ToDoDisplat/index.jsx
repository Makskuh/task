import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TODO_SCHEMA } from '../../utils/validationSchemas';
import { initialValues } from '../../utils/validationSchemas';
import classNames from 'classnames';
import styles from './toDo.module.scss';

function ToDoDisplay() {
  const [todos, setTodos] = useState([]);
  const classComplete = classNames({[styles.complete]:todos.isCompleted})
  const onSumbit = (values, formikBag) => {
    const newTask = {
      task: values.writeTask,
      isCompleted: false,
    };
    setTodos([...todos, newTask]);
    formikBag.resetForm();
  };
  const deleteTask = (e) => {
    setTodos(
      todos.filter(
        (item) =>
          item.task + ' DeleteComplete' !== e.target.parentElement.innerText
      )
    );
  };
  const completeTask = (e) => {
    setTodos(
      todos.map((item) => {
        if (
          item.task + ' DeleteComplete' ===
          e.target.parentElement.innerText
        ) {
          item.isCompleted = !item.isCompleted;
        }
        e.target.parentElement.classList.value = classComplete
        console.log(e.target.parentElement.classList.value = classComplete)
        return item;
      })
    );
  };
  return (
    <Formik
      onSubmit={onSumbit}
      initialValues={initialValues}
      validationSchema={TODO_SCHEMA}
    >
      {(props) => {
        return (
          <Form>
            <h1>ToDo List</h1>
            <Field name="writeTask" placeholder="write a task" />
            {todos.map((ele, index) => (
              <li key={index} className={classComplete}>
                {ele.task}{' '}
                <button onClick={deleteTask} type="button">
                  Delete
                </button>
                <button type="button" onClick={completeTask}>
                  Complete
                </button>
              </li>
            ))}
            <ErrorMessage name="writeTask">
              {(msg) => <li>{msg} </li>}
            </ErrorMessage>
            <button type="submit">Add</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ToDoDisplay;
