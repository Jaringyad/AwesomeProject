import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { PanResponder } from 'react-native';

import Header from '../components/JokeGenerator/Header';
import JokeSetup from '../components/JokeGenerator/JokeSetup';
import DragBar from '../components/JokeGenerator/DragBar';
import TextInputSection from '../components/JokeGenerator/TextInputSection';

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
        model: "gpt-3.5-turbo",
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
      <Header onPressBack={() => { /* Handle back press */ }} />

      {/* Joke Setup */}
      <Animatable.View
        style={[styles.centerContent, { height: centerContentHeight }]}
        animation="fadeIn"
      >
        <JokeSetup
          loading={loading}
          setupText={setupText}
          onPress={handlePress}
        />
      </Animatable.View>

      {/* Drag Bar */}
      <DragBar panResponder={panResponder} />

      {/* Text Input Section */}
      <TextInputSection />
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
  centerContent: {
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default MyPage;
