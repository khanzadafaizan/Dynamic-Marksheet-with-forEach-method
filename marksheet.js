
const students = [
  { subjects: 'Compulsory-ENGLISH', maxim: 100, minim: 33, obtain: 45, practicalmaxim: '', practicalminim: '', practicalobtain: '' },
  { subjects: 'CHEMISTRY-III', maxim: 100, minim: 33, obtain: 41, practicalmaxim: 50, practicalminim: 16, practicalobtain: 35 },
  { subjects: 'CHEMISTRY-IV', maxim: 100, minim: 33, obtain: 53, practicalmaxim: 50, practicalminim: 16, practicalobtain: 28 },
  { subjects: 'PHYSICS-III', maxim: 100, minim: 33, obtain: 49, practicalmaxim: 50, practicalminim: 16, practicalobtain: 23 },
  { subjects: 'PHYSICS-IV', maxim: 100, minim: 33, obtain: 50, practicalmaxim: 50, practicalminim: 16, practicalobtain: 38 },
  { subjects: 'MATHEMATICS-III', maxim: 100, minim: 49, obtain: 79, practicalmaxim: '', practicalminim: '', practicalobtain: '' },
  { subjects: 'MATHEMATICS-IV', maxim: 100, minim: 49, obtain: 68, practicalmaxim: '', practicalminim: '', practicalobtain: '' },
  { subjects: 'Total Marks of Part-II', maxim: 1000, minim: '', obtain: 541, practicalmaxim: '', practicalminim: '', practicalobtain: '' },
  { subjects: 'Total Marks of Part-I', maxim: 1100, minim: '', obtain: 607, practicalmaxim: '', practicalminim: '', practicalobtain: '' },
  { subjects: 'Grand Total of Part-II & Part-II', maxim: 2100, minim: '', obtain: 1148, practicalmaxim: 'Pass', practicalminim: '', practicalobtain: '' }
];

const bodyConatiner = document.getElementById('container');

const containerMain1 = document.createElement('div');
containerMain1.className = 'mx-auto mt-24 bg-slate-200 flex justify-between';

const containerMain2 = document.createElement('div');
containerMain2.className = 'mx-auto bg-slate-200 flex justify-between';


const mainDiv1 = document.createElement('div');
const Div1H1 = document.createElement('h1');
Div1H1.innerText = ('Book No.');
Div1H1.className = 'mt-5';

mainDiv1.append(Div1H1);


const mainDiv2 = document.createElement('div');
const Div2H1 = document.createElement('h1');
Div2H1.innerText = ('UNIVERSITY OF SINDH');
Div2H1.className = ' text-center text-5xl font-extrabold';

mainDiv2.append(Div2H1);

const mainDiv3 = document.createElement('div');
const Div3H1 = document.createElement('h1');
Div3H1.innerText = ('Certificate');
Div3H1.className = 'text-right mt-5';
mainDiv3.append(Div3H1);


const main2Div1 = document.createElement('div');
const Div1_2H1 = document.createElement('h1');
Div1_2H1.innerText = ('0691');
Div1_2H1.className = 'text-slate-900 mt-5 text-2xl';

main2Div1.append(Div1_2H1);


const main2Div2 = document.createElement('div');
const Div2_2H1 = document.createElement('h1');
Div2_2H1.innerText = ('JAMSHORO, SINDH, PAKISTAN');
Div2_2H1.className = 'text-center text-2xl font-bold mt-5';

main2Div2.append(Div2_2H1);



const main2Div3 = document.createElement('div');
const Div2_3H1 = document.createElement('h1');
Div2_3H1.innerText = ('No. 069050');
Div2_3H1.className = 'text-right text-slate-900 mt-5 text-2xl';
main2Div3.append(Div2_3H1);


containerMain1.append(mainDiv1, mainDiv2, mainDiv3);

containerMain2.append(main2Div1, main2Div2, main2Div3);

bodyConatiner.append(containerMain1, containerMain2);


const tableContainer = document.getElementById('students-table');
const table = document.createElement('table');
tableContainer.append(table);

students.forEach(function (student, index) {

  const thead = document.createElement('thead');
  const tr = document.createElement('tr');

  if (index >= 9) {

    for (let key in student) {
      const th = document.createElement('th');
      th.className = 'text-center px-10 bg-slate-400 border border-black ';
      th.innerText = key.toUpperCase();
      tr.append(th);
    }

  }
  thead.append(tr);
  table.append(thead)
})

const tbody = document.createElement('tbody');
table.append(tbody);

students.forEach(function (student) {
  const tr = document.createElement('tr');

  for (let key in student) {
    const td = document.createElement('td');
    td.className = 'text-center px-10 bg-slate-200 border border-black ';

    td.innerText = (student[key]);
    tr.append(td);
  }
  tbody.append(tr);
})


