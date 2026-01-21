import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        country: 'United States',
        team: 'Cardinals',
        league: 'Wild West Stadium',
        date: '2023-10-01',
    },
    reducers: {
        chooseCountry: (state, action: PayloadAction<string>) => { state.country = action.payload;},
        chooseTeam: (state, action: PayloadAction<string>) => { state.team = action.payload; },
        chooseLeague: (state, action: PayloadAction<string>) => { state.league = action.payload; },
        chooseDate: (state, action: PayloadAction<string>) => { state.date = action.payload; },
        }
    }) 
    export const reducer = rootSlice.reducer;
    export const { chooseCountry, chooseTeam, chooseLeague, chooseDate } = rootSlice.actions;