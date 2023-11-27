document.getElementById('verificarBtn').addEventListener('click', function () {
    var cpfInput = document.getElementById('cpf');
    var cpf = cpfInput.value;

    if (cpf.length === 9) {
        function calcularDigitosVerificadores(cpf) {
            let soma = 0;
            let peso = 10;

            for (let i = 0; i < cpf.length; i++) {
                soma += parseInt(cpf[i]) * peso;
                peso--;
            }

            let resto = soma % 11;
            const digito1 = resto < 2 ? 0 : 11 - resto;

            cpf += digito1;

            soma = 0;
            peso = 11;

            for (let i = 0; i < cpf.length; i++) {
                soma += parseInt(cpf[i]) * peso;
                peso--;
            }

            resto = soma % 11;
            const digito2 = resto < 2 ? 0 : 11 - resto;

            return `${digito1}${digito2}`;
        }

        var digitosVerificadores = calcularDigitosVerificadores(cpf);
        var cpfCompleto = cpf + digitosVerificadores;

        var novoContainer = document.createElement('div');
        novoContainer.className = 'cpf-container';

        novoContainer.innerHTML = `
            <div class="cpf-content">
                <h2>Dígitos verificados</h2>
                <p>CPF: ${cpfCompleto}</p>
                <p>Dígitos: ${digitosVerificadores}</p>
                <button class="deleteBtn">Deletar</button>
            </div>
        `;

        document.body.appendChild(novoContainer);

        novoContainer.querySelector('.deleteBtn').addEventListener('click', function () {
            document.body.removeChild(novoContainer);
        });

        cpfInput.value = '';
    } else {
        alert('Digite os 9 primeiros dígitos do CPF antes de verificar.');
    }
});