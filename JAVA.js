// Funções das Modais
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Funções do Checklist
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa fofinha para adicionar! ✨');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <label class="custom-checkbox">
            <input type="checkbox" onchange="toggleTask(this)">
            <span class="checkmark"></span>
            <span class="task-text">${taskText}</span>
        </label>
        <button type="button" class="btn-delete" onclick="removeTask(this)">✕</button>
    `;

    taskList.appendChild(li);
    input.value = '';
}

function toggleTask(checkbox) {
    // A animação e estilo são tratados diretamente pelo CSS através do seletor :checked
}

function removeTask(button) {
    const listItem = button.closest('li');
    listItem.remove();
}