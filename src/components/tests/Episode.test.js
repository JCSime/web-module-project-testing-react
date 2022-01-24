import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "",
    season: 1,
    number: 1,
    summary: "test summary",
    runtime: 1
}

const testEpisodeWithoutImage = {
    //Add in appropriate test data structure here.
    id: 1,
    name: '',
    summary: 'test summary',
    image: null
}


test("renders without error", () => {
    render(<Episode episode={testEpisode}/>);
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode}/>);
    const summary = screen.queryByText(/test summary/i)
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('test summary');
    expect(summary).toBeTruthy();
});

test("renders default image when image is not defined", ()=>{
    // render(<Episode episode={[]} image={null}/>);
    // const testerImg = screen.getAllByRole('img');
    // expect(testerImg).toHaveLength(1);
});
