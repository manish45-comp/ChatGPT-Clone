import { GoogleGenerativeAI } from "@google/generative-ai";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export const generateTextFromPrompt = createAsyncThunk(
  "ai/generateTextFromPrompt",
  async ({ prompt }) => {
    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      return { id: uuidv4(), text, prompt };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateTextFromPrompt.pending, (state) => {
        state.loading = true;
      })
      .addCase(generateTextFromPrompt.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(generateTextFromPrompt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = [];
      });
  },
});

export default aiSlice.reducer;
