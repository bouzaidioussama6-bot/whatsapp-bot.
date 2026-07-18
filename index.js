const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

client.on('qr', (qr) => {
    console.log('SCAN_THIS_QR_CODE:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('👑 البوت جاهز ومربوط بحسابك بنجاح!');
});

client.on('message', async (msg) => {
    const replyMessage = `👑 عـبـد الـعـظـيـم مـشـغـول، اتـرك رسـالـتـك وسـيـرد مـن بـعـد 💬⚡`;
    await msg.reply(replyMessage);
    console.log(`تم الرد على: ${msg.from}`);
});

client.initialize();
