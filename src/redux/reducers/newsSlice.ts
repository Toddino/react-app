import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNewsAPI } from '../api/newsAPI';
import { STATUS, TStatus } from '../enum';
import { RootState } from '../store';
import { TNews } from '../types/news';


export interface INews {
    news: {
        response: Array<TNews>,
        status: TStatus
    }
}


const initialState: INews = {
    news: {
        response: [],
        status: STATUS.IDLE
    }
};

export const fetchNews = createAsyncThunk(
    'cutoff/fetchNews',
    async () => {
        const response = await fetchNewsAPI();
        return response.data;
    }
);

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        reset: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchNews.pending, (state) => {
            return {
                ...state,
                news: {
                    response: [],
                    status: STATUS.LOADING
                }
            }
        })
        .addCase(fetchNews.rejected, (state) => {
            return {
                ...state,
                news: {
                    ...state.news,
                    status: STATUS.FAILED
                }
            }
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            return {
                ...state,
                news: {
                    response: action.payload,
                    status: STATUS.IDLE
                }
            }
        });
    },
});
export const newsState = (state: RootState) => state.news;

export const { reset } = newsSlice.actions;

export default newsSlice.reducer;
