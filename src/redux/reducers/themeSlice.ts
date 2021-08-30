import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNewsAPI } from '../api/newsAPI';
import { STATUS, TStatus } from '../enum';
import { RootState } from '../store';
import { TNews } from '../types/news';


export interface ITheme {
    isDark: boolean
}


const initialState: ITheme = {
    isDark: true
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        toggle: (state) => {
            return {
                isDark: !state.isDark
            }
        },
    },
});
export const themeState = (state: RootState) => state.theme;

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
