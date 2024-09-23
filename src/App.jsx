import './App.css'
import { useState } from 'react'
import {
  Box,
  Center,
  Text,
  Button
} from '@chakra-ui/react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import FlexTranslateLanguage from './Components/flex-translate-language';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

const safetySetting = {
  category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  threshold: HarmBlockThreshold.BLOCK_NONE,
}

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings: safetySetting });

function App() {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [language, setLanguage] = useState('English')

  const [loading, setLoading] = useState(false);

  async function translateText(text, language) {
    try {
      setLoading(true);
      const prompt = `this is the text: ${text}, and you have to translate the text into ${language}. make sure the output is must be translated text only! and keep detect the language self!`;
      const result = await model.generateContent(prompt);
      setTranslatedText(result.response.text());
      setLoading(false);
    } catch (error) {
      setTranslatedText("Sorry, inappropriate or offensive content cannot be translated, Sorry we can\'t help you with this message!");
      console.error(error);
    }
  }

  return (
    <Box className='app' w='80%' m='auto' my={10} border='5px solid' color='#fff' borderRadius='2rem' p={[6, 10, 16]} pos='relative' pb={['100px', '160px']}>

      <Center p={[3, 6]} mb={[4, 6]}>
        <Text fontSize={['3xl', '5xl']} fontWeight='bold'>Translator App ~ Gemini</Text>
      </Center>

      <FlexTranslateLanguage onChange={(e) => setText(e.target.value)} handlePress={translateText} setLanguage={(e) => setLanguage(e.target.value)} text={text} language={language} />

      <Box mt={4} w='full'>
        <Button isLoading={loading} loadingText={`Sending words to ${language} school... translating!`} onClick={() => translateText(text, language)} w='full'>Translate</Button>
      </Box>

      <Text mt={4} fontWeight="bold">Translated Text:</Text>
      <Text fontSize={'xl'}>{translatedText}</Text>

      <Box position='absolute' bottom={0} right={0} fontWeight='bold' m={['15px', '30px']} fontSize={['sm', 'md']} color='#fff'>
        E-Mail: <a href="mailto:Amanmittle4321@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>Amanmittle4321@gmail.com</a>
        <br />
        Github: <a href="https://github.com/Aman-mittal-52" style={{ color: '#fff', textDecoration: 'underline' }}>@Aman-mittal-52</a>
      </Box>
    </Box>
  )
}

export default App;
