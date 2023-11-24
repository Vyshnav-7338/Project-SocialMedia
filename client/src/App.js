import { useState } from "react";
import axios from 'axios'
const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    try {
      const socialMediaArray = inputValue.split(',').map((item) => item.trim());
      console.log(socialMediaArray)
     
      await axios.post('http://localhost:3001/api/socialMedia', {
        socialMedia: socialMediaArray,
      });

      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter fb, instagram, and whatsapp"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
