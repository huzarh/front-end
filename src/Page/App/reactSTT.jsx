import React, { useState, useEffect } from 'react';

function Soz() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check if the browser supports the Web Speech API
    if ('webkitSpeechRecognition' in window) {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.lang = 'tr-TR'; // Set the language to Turkish

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
      };

      setRecognition(recognitionInstance);
    } else {
      console.log('Speech recognition is not supported in this browser.');
    }

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, [recognition.abort()]);

  const toggleListening = () => {
    if (isListening) {
      try {
        recognition.abort();
      } catch (error) {
        console.log('Failed to stop recognition:', error);
      }
      setIsListening(false);
    } else {
      try {
        recognition.start();
      } catch (error) {
        console.log('Failed to start recognition:', error);
      }
      setIsListening(true);
    }
  };

  return (
    <div>
      <button onClick={toggleListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <textarea value={transcript} readOnly />
    </div>
  );
}

export default Soz;
