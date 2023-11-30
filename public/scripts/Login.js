async function Logar() {
    try {
        // Obtenha os valores dos campos de email e senha
        const email = document.getElementById('email')
        const senha = document.getElementById('password')

        // Crie uma string de consulta para incluir os parâmetros na URL
        const queryParams = `?email=${encodeURIComponent(email.value)}&senha=${encodeURIComponent(senha.value)}`;

        // Faça a requisição GET incluindo os parâmetros na URL
        const response = await fetch(`/login${queryParams}`, {
            method: 'GET',
        });

        if (response.ok) {
            let text = await response.text();

            if (text === 'UserInexistente') {
                alert('Usuário Inexistente.');
            } else if (text === "SenhaIncorreta") {
                alert('Usuário ou senha incorreta.');
            } else if (text === "Sucesso") {
                alert('Logado.');
            }

        } else {
            console.error('Erro na requisição:', response.status);
            alert('Erro ao autenticar o usuário.');
        }
        
    } catch (error) {
        console.error('Erro:', error.message);
        alert('Erro ao processar a requisição.');
    }

}