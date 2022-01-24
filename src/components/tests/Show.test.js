import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: 'test',
    summary: 'test',
    seasons: [
        { id: 0, seasonName: 'season 1', episodes: []},
        { id: 1, seasonName: 'season 2', episodes: []},
        { id: 2, seasonName: 'season 3', episodes: []}
    ]
}

test('renders without errors', ()=>{
    render(<Show show={testShow} selectedSeason={'none'}/>);
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>);
    const loadingComp = screen.queryByTestId('loading-container');
    expect(loadingComp).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason={'none'}/>);
    const seasons = screen.queryAllByTestId('season-option');
    expect(seasons).toHaveLength(3);
});

test('handleSelect is called when an season is selected', () => {});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});
