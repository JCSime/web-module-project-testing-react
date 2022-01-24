import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode, { episode } from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "",
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

});

test("renders default image when image is not defined", ()=>{

});
