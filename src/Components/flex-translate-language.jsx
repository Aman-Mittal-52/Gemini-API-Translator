import { Select, Flex, Textarea } from '@chakra-ui/react';

const FlexTranslateLanguage = ({ onChange, setLanguage, text, language, handlePress }) => {
  return (
    <Flex gap={4} flexDir={['column', 'row']}>
      <Textarea
        w='100%'
        h='100px'
        fontSize='xl'
        placeholder='Enter Text to be translated'
        value={text}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            handlePress(text, language)
          }
        }}
        resize='none'
      />

      <Select
        placeholder="Choose a language"
        color='#fff'
        bg='transparent'
        className='language-select'
        cursor='pointer'
        onChange={setLanguage}
        _focus={{
          bg: '#312F6F',
          color: '#000',
          transition: '0.3s ease-in-out',
        }}
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Urdu">Urdu</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Arabic">Arabic</option>
        <option value="Russian">Russian</option>
        <option value="Japanese">Japanese</option>
        <option value="Indonesian">Indonesian</option>
        <option value="Bengali">Bengali</option>
        <option value="Portuguese">Portuguese</option>
        <option value="Swahili">Swahili</option>
        <option value="Marathi">Marathi</option>
        <option value="Mandarin Chinese">Mandarin Chinese</option>
      </Select>
    </Flex>
  );
};

export default FlexTranslateLanguage;
