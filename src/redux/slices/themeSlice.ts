import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  selectedTheme: string; // 'light' or 'dark'
}

const initialState: ThemeState = {
  selectedTheme: 'light', // Default to light theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.selectedTheme = action.payload; // Save the theme to Redux
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
