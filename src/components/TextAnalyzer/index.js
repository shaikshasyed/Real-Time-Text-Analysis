import React, { useState, useEffect } from "react";
import { Button, Textarea, Input } from "@chakra-ui/react";
import "./index.css";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");

  useEffect(() => {
    
    const words = text.match(/\b\w+\b/g); // Match words (letters and numbers)
    if (words) {
      const uniqueWords = new Set(words.map((word) => word.toLowerCase())); // Normalize to lowercase
      setUniqueWordCount(uniqueWords.size);
    } else {
      setUniqueWordCount(0);
    }

    // Character count excluding spaces and punctuation
    const characters = text.replace(/[^a-zA-Z0-9]/g, ""); //  only letters and numbers
    setCharCount(characters.length);
  }, [text]);

  const handleReplace = () => {
    const regex = new RegExp(searchString, "g"); 
    setText((prevText) => prevText.replace(regex, replaceString)); // Replace all occurrences
  };

  return (
    <div className="text-analyzer">
        <Textarea
        color="white"
        width={400}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />

      <div className="statistics">
        <p className="count">
          Unique Word Count:{" "}
          <span className="charcount">{uniqueWordCount}</span>
        </p>
        <p className="count">
          Character Count : <span className="charcount">{charCount}</span>
        </p>
      </div>

      <div className="replace-section">
        <div className="inputs">
          <Input
            size="md"
            width={150}
            color="white"
            colorScheme="whiteAplha"
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Search"
          />
          <Input
            size="md"
            width={150}
            color="red"
            type="text"
            value={replaceString}
            onChange={(e) => setReplaceString(e.target.value)}
            placeholder="Replace with..."
          />
        </div>
        <Button width={60} colorScheme="red" onClick={handleReplace}>
          Replace All
        </Button>
      </div>
    </div>
  );
};

export default TextAnalyzer;
