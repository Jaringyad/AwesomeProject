import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar, TaskItem } from '../components/Exercise';

interface Exercise {
  id: number;
  name: string;
  description?: string;
}

interface TaskItemProps {
  task: Exercise;
  onPress: (id: number) => void;
}

const ExerciseScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: 1, name: 'Add punchline' },
    { id: 2, name: 'Больше пока что не придумал .....'}
    // ... другие упражнения
  ]);
  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchText.toLowerCase())
  );


  const handleExercisePress = (exerciseId: number) => {
    if (exerciseId === 1) {
      navigation.navigate('JokeSetupGenerator');
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchText} onTextChange={setSearchText} />
      <FlatList
        data={filteredExercises}
        renderItem={({ item }) => (
          <TaskItem task={item} onPress={() => handleExercisePress(item.id)} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
});

export default ExerciseScreen;
