import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({initialList}) => {
  const [toDoList, setToDoList] = useState(initialList.map((task) => ({id: uuidv4(), toDo: task})));

  const addToDo = (newTitle) => {
    const newItem = {id: uuidv4(), toDo: newTitle};
    setToDoList([...toDoList, newItem]);
  }

  const removeToDo = (id) => {
    const remaining = toDoList.filter((item) => item.id !== id);
    setToDoList(remaining);
  }

  return (
    <View style={styles.todoListContainer}>
      {toDoList.map((item) => (
        <View key={item.id} style={styles.todoItem}>
          <Text>{item.toDo}</Text>
          <Button title='Remove' onPress={() => removeToDo(item.id)} />
        </View>
      ))}

      <AddTask onAddTask={addToDo} />
    </View>
  )
}

ToDoList.defaultProps = {
  initialList: []
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;
