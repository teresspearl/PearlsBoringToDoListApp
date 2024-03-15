/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const {tasks, setTasks} = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const handleAddTask = task => {
    //Implement the logic to add new task

    /*tasks={.push(task);
    
    setTasks(tasks);*/

    //setTasks(tasks.concat(task));

    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={handleAddTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
