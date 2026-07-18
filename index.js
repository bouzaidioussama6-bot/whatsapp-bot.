const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('--- SCAN_THIS_QR_CODE ---');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('مبروك! البوت شغال ومربوط بحسابك بنجاح 🎉');
});

client.on('message', async (msg) => {
    if (msg.body === 'السلام') {
        await msg.reply('وعليكم السلام ورحمة الله! أنا بوت الواتساب الخاص بك.');
    }
});

client.initialize();
