import OpenAI from "openai";

// here it is kind of authorization to OPEN_AI
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
