import fetch from 'node-fetch';

// Configurações do bot Telegram
const botToken = '7486305961:AAHNaYir4Cf4Vq6TFhdMhpULX64OiUHXQpc';
const chatIds = ['447938340']; // Lista de IDs de chat

// Mensagem que será enviada
const message = 'Teste via github, a cada 2min.!';

// Função para enviar mensagem via bot do Telegram
async function sendMessage(chatId) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const params = new URLSearchParams({
        chat_id: chatId,
        text: message,
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        });

        if (!response.ok) {
            throw new Error(`Erro ao enviar mensagem para o chat_id ${chatId}`);
        }

        console.log(`Mensagem enviada com sucesso para o chat_id ${chatId}`);
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

// Executar a função para enviar mensagem para cada chat_id
async function sendMessagesToMultipleChats() {
    for (const chatId of chatIds) {
        await sendMessage(chatId);
    }
}

// Chamar a função para enviar mensagem para múltiplos chats
sendMessagesToMultipleChats();
