import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, PanResponder, TouchableHighlight, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
const { Configuration, OpenAIApi } = require("openai");

const MyPage = () => {
  const [dragBarHeight] = useState(8);
  const [startDragPosition, setStartDragPosition] = useState(0);
  const [centerContentHeight, setCenterContentHeight] = useState(200);

  const [i, setI] = useState(0);


  const configuration = new Configuration(
    {
      apiKey: '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',
    }
  );

  const [setupText, setSetupText] = useState("Tap to generate list of setups!")
  const [loading, setLoading] = useState(false);
  const [setups, setSetups] = useState([]);

  const openai = new OpenAIApi(configuration);

  const generateJokesArray = async () => {
    const prompt = `
    I need an exercise to improve my skills in writing jokes. 
    write me 5 setups to which I will have to come up with punchlines. 
    in Russian. 
    as simple array of strings.
    [
      "1 setup",
      "2 setup"
    ]
    Only array
    `
    console.log(prompt);
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{role: "user", content: prompt,}],
      });
      console.log("response: ", completion.data.choices[0].message.content);
      return completion.data.choices[0].message.content;
    } catch (e) {
      console.log(e);
      setSetupText("Error");
    }
  };

  const handlePress = async () => {
    setLoading(true);
    console.log(i);
    if (i === setups.length - 1 || setups.length === 0) {
      try
      {
        const newSetups = JSON.parse(await generateJokesArray());
        setSetups(newSetups);
        setI(0);
        setSetupText(newSetups[0]);
      }
      catch (e) {
        console.log("error: ", e);
        setSetupText("Something went wrong, please tap again.")
      }
    } else {
      setI((prevI) => prevI + 1);
      setSetupText(setups[i + 1]);
    }
    setLoading(false);
  };
  

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (event) => {
      // Получаем начальную позицию при касании палочки
      const touchY = event.nativeEvent.pageY;
      setStartDragPosition(touchY);
    },
    onPanResponderMove: (event) => {
      // Получаем текущую позицию при перемещении палочки
      const touchY = event.nativeEvent.pageY;

      // Вычисляем изменение высоты centerContent
      const change = touchY - startDragPosition;
      const newHeight = dragBarHeight + change;

      setCenterContentHeight((prevHeight) => prevHeight + change);
      setStartDragPosition(touchY);
    },
  });

  return (
    <View style={styles.container}>
      {/* Верхняя панель */}
      <View style={styles.header}>
        <Text style={styles.backLink}>Back to list</Text>
      </View>

      {/* Центральная часть */}
      <Animatable.View
        style={[styles.centerContent, { height: centerContentHeight }]}
        animation="fadeIn"
      >
        <TouchableHighlight onPress={handlePress} underlayColor="#ffffff">
          {loading ? ( // Render the ActivityIndicator when loading is true
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Text style={[styles.centerText]}>{setupText}</Text>
          )}
        </TouchableHighlight>

        {/* Здесь можно добавить компоненты с картинками */}
      </Animatable.View>

      {/* Регулируемая палочка */}
      <View style={styles.dragBarContainer} {...panResponder.panHandlers}>
        <TouchableOpacity style={styles.dragBar} />
      </View>

      {/* Поле для ввода текста */}
      <View style={styles.textInputContainer}>
        <View style={styles.textInputHeader}>
          <Text style={styles.textInputHeaderText}>After drag bar</Text>
          <Text style={styles.saveToNotes}>Save to notes</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Input your punchline here"
          multiline
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: '#CCCCCC', // Добавляем цвет нижней границы
    borderBottomWidth: 1, // Добавляем толщину нижней границы
  },
  backLink: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 8,
    color: 'black',
  },
  title: {
    flex: 1, // Добавляем гибкость для элемента заголовка
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Выравниваем текст по центру
  },
  centerContent: {
    alignItems: 'center',
    marginBottom: 16,
  },
  centerText: {
    fontSize: 20,
    color: 'black',
  },
  dragBarContainer: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dragBar: {
    backgroundColor: '#8b8b8b',
    borderRadius: 4,
    height: 8, // Set a fixed height for the drag bar
    width: 40,
  },
  afterDragBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputContainer: {
    marginBottom: 16,
    marginTop: 16,
  },
  textInputHeader: {
    flexDirection: 'row', // Устанавливаем направление главной оси
    justifyContent: 'space-between', // Распределяем элементы по оси X
    alignItems: 'center', // Выравниваем элементы по оси Y
    marginBottom: 8,
  },
  textInputHeaderText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  saveToNotes: {
    fontSize: 16,
    color: 'red',
    marginRight: 8,
  },
  textInput: {
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default MyPage;
