import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function Test() {
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();

    const handleSpeak = () => {
        const voices = {
            us: "en-US-Wavenet-C",
            uk: "en-GB-Wavenet-B"
        }
        const voice = new SpeechSynthesisUtterance();
        voice.text = value;
        voice.lang = voices[selectedVoice]; // Lấy giọng phù hợp với tên đã chọn
        speechSynthesis.speak(voice);
    }

    const [selectedVoice, setSelectedVoice] = useState('us');

    return (
        <div className="App">
            <select value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)}>
                <option value="us">US</option>
                <option value="uk">UK</option>
            </select>
            <textarea rows="5" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
            <br />
            <button onClick={handleSpeak}>Speak</button>
        </div>
    );
}

export default Test;
