import {
  Gantt,
  ProjectModel,
} from './node_modules/@bryntum/gantt/gantt.module.js';

// async function getData() {
//   const response = await fetch('data.json');
//   const data = await response.json();
//   return data;
// }
// const data = await getData();

const project = new ProjectModel({
  // taskStore: {
  //   autoTree: true,
  //   transformFlatData: true,
  // },
  // specify data source
  transport: {
    load: {
      url: 'http://localhost:3000/download',
    },
  },
  // validateResponse: true,
});
console.log(project);
project.load();

// console.log(project);

const gantt = new Gantt({
  appendTo: document.body,

  // startDate: new Date(2022, 11, 1),
  // endDate: new Date(2023, 0, 20),
  // project: {
  //   tasksData: [
  //     {
  //       id: 1,
  //       name: 'Write docs',
  //       expanded: true,
  //       children: await getData(),
  //     },
  //   ],

  project,
  // dependenciesData: [{ fromTask: 2, toTask: 3 }],
  // },

  columns: [
    { type: 'name', width: 160 },
    { type: 'startdate', width: 100 },
    // { type: 'endDate', width: 100 },
  ],
});
// console.log(gantt);
