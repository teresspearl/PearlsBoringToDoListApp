import React from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
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
    <>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={handleAddTask} />
      </SafeAreaView>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </>
  );
}

export default HomeScreen;
