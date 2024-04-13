import React, {useEffect} from 'react';
import {TextInput, StyleSheet, Button, View, Text} from 'react-native';

function ToDoForm({addTask}) {
  const [task, setTask] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/path/to/tasks.json');
        const data = await response.json();
        setTasks(data.tasks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
    setLoading(false);
  }, []);

  const handleAddTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setTask(tasks[randomIndex]);
    }
  };

  const handleChangeText = text => {
    setTask(text);
  };

  const handlePress = () => {
    addTask(task);
    setTask('');
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={handleChangeText}
          value={task}
        />
        <Button title="Add" onPress={handlePress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
