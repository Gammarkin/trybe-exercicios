const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const completedElements = document.getElementsByClassName('completed');

function createList() {
  const newItem = document.createElement('li');
  newItem.innerText = textoTarefa.value;
  return newItem;
}

function alertOrMake() {
  criarTarefa.addEventListener('click', () => {
    if (textoTarefa.value === '') {
      alert('valor inválido!');
    } else {
      listaTarefas.appendChild(createList());
      textoTarefa.value = '';
    }
  });
}
alertOrMake();

function removeSelected() {
  const listElements = listaTarefas.children;
  for (let i = 0; i < listElements.length; i += 1) {
    if (listElements[i].id === 'selected') {
      listElements[i].removeAttribute('id');
    }
  }
}

// ref https://developer.mozilla.org/pt-BR/docs/Web/API/Element/tagName
function selectedTask() {
  listaTarefas.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      removeSelected();
      const targetEvent = event.target;
      targetEvent.id = 'selected';
    }
  });
}
selectedTask();

function doubleClick() {
  listaTarefas.addEventListener('dblclick', (event) => {
    const targetEvent = event.target;
    if (targetEvent.tagName === 'LI'
      && targetEvent.className === 'completed') {
      targetEvent.removeAttribute('class');
    } else {
      targetEvent.className = 'completed';
    }
  });
}
doubleClick();
// ref https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul

function eraseList() {
  apagaTudo.addEventListener('click', () => {
    const childrenList = listaTarefas.children;
    const childLength = childrenList.length;
    for (let i = 0; i < childLength; i += 1) {
      listaTarefas.removeChild(childrenList[0]);
    }
  });
}
eraseList();

function eraseCompleted() {
  removerFinalizados.addEventListener('click', () => {
    while (completedElements.length > 0) {
      listaTarefas.removeChild(completedElements[0]);
    }
  });
}
eraseCompleted();

/* ref: entrei nos repos de:
[Gabriel Oliveira]
[Tainá Santana]
[Frederico Wilkens]
[LEANDRO SILVA]
*/
