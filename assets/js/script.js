const form = document.getElementById('form');
const value = document.getElementById('value');
const descriptionElement = document.getElementById('description');
const infos = document.getElementById('infos');

// Função para calcular e exibir o IMC
function calculateBMI() {
    // Obtém os valores dos campos de peso e altura
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Verifica se os valores são válidos
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcula o IMC
    const bmi = (weight / (height * height)).toFixed(2);
    let description = '';

    // Adiciona classe de atenção
    value.classList.add('atention');
    infos.classList.remove('hidden');

    // Determina a descrição com base no valor do IMC
    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('atention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
    } else {
        description = 'Cuidado! Você está com obesidade mórbida!';
    }

    // Atualiza o conteúdo da página com o valor do IMC e a descrição
    value.textContent = bmi.replace('.', ',');
    descriptionElement.textContent = description;
}

// Evento de submit do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

// Evento para limpar o resultado se os campos forem apagados
const inputs = document.querySelectorAll('#weight, #height');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        // Se algum campo estiver vazio, limpa o resultado
        if (!document.getElementById('weight').value || !document.getElementById('height').value) {
            value.textContent = '';
            descriptionElement.textContent = '';
            infos.classList.add('hidden');
            value.classList.remove('atention', 'normal'); // Remove as classes de estilo
        }
    });
});
