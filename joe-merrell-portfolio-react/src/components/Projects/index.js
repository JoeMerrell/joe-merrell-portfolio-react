import React from 'react';
import blank from '../../assets/images/projects/blank.jpg';
import List from '../ProjectsProcess/index.js';

const repos = [
    {
        id: 1,
        name: 'UFO MAP',
        git: 'https://github.com/JoeMerrell/ufo-map',
        deploy: 'https://new-ufo.herokuapp.com/',
        description: 'A web app that allows users to search a database of UFO sightings in the United States and see the resultant data on a heat map',
        image: {blank}
    },
    {
        id: 2,
        name: 'WEATHER DASHBOARD',
        git: 'https://github.com/JoeMerrell/weather-dashboard',
        deploy:'https://joemerrell.github.io/weather-dashboard/',
        description: 'A simple web app that allows users to search for current weather information',
        image: {blank}
    },
    {
        id: 3,
        name: 'README GENERATOR',
        git:'https://github.com/JoeMerrell/readme-generator',
        deploy: 'N/A',
        description: 'A very useful terminal-based app that, once downloaded, generates a README.md file based on user input. See GitHub repo for instructions (in README.md file)',
        image: {blank}
    },   
    {
        id: 4,
        name: 'PASSWORD GENERATOR',
        git: 'https://github.com/JoeMerrell/password-generator',
        deploy: 'https://joemerrell.github.io/password-generator/',
        description: 'A simple web app that allows users to generate passwords of varying lengths based on a set of selectable criteria',
        image: {blank}
    }, 
    {
        id: 5,
        name: 'WORK DAY SCHEDULER',
        git: 'https://github.com/JoeMerrell/work-day-scheduler',
        deploy: 'https://joemerrell.github.io/work-day-scheduler/',
        description: 'A browser-based planner for the workday',
        image: {blank}
    },
    {
        id: 6,
        name: 'BUDGET TRACKER',
        git: 'https://github.com/JoeMerrell/budget-tracker',
        deploy: 'https://joemerrell.github.io/budget-tracker/',
        description: 'A simple browser-based financial tracker',
        image: {blank}
    },    
]

function Projects() {
    return <List repos={repos} />;
  }

export default Projects;