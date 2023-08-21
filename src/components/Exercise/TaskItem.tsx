import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Task {
  id: number;
  name: string;
}

interface TaskItemProps {
  task: Task;
  onPress: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onPress }) => {
  return (
    <TouchableOpacity style={styles.taskItem} onPress={onPress}>
      <Text style={styles.taskText}>{task.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 16,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  taskText: {
    fontSize: 16,
    color: 'black',
  },
});

export default TaskItem;
