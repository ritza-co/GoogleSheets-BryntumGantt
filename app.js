import { Gantt } from './node_modules/@bryntum/gantt/gantt.module.js';

const gantt = new Gantt({
  appendTo: document.body,

  project: {
    transport: {
      load: {
        url: 'http://localhost:3000/download',
      },
    },
  },

  columns: [
    { type: 'name', width: 160 },
    { type: 'startdate', width: 100 },
  ],
});

gantt.project.load();
