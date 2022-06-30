const body = document.getElementById('container');
body.style.background = 'gray';

const header = document.getElementById('header-container');
header.style.background = '#00B069';

const emergencytasks = document.getElementsByClassName('emergency-tasks')[0];
emergencytasks.style.background = '#FF9F82';

const noemergencytasks = document.getElementsByClassName('no-emergency-tasks')[0];
noemergencytasks.style.background = '#F9DB5E'; 

const footercontainer = document.getElementsByTagName('footer')[0];
footercontainer.style.background = '#003533';

const titulosEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');

for(var i = 0;i < titulosEmergencyTasks.length;i++){
  titulosEmergencyTasks[i].style.background = '#A63AF3';
}

const titulosNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');

for (let i in titulosNoEmergencyTasks){
  titulosNoEmergencyTasks[i].style.background = 'black';
}