/**
MY HW MODS WA
*/

const fs = require('fs')
const chalk = require('chalk')


//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='



//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
global.ig = 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
global.mygc = 'https://chat.whatsapp.com/EOBISDYBxalCAhhhuV7oEH'
global.myweb = 'https://youtube.com/channel/UCh6zcsGjETF83ocmz4gvCHg'
global.email = 'yosokacodex@gmail.com'
global.region = 'indonesia'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '©𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚 𝒀𝒐𝒔𝒐𝒌𝒂✓' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '©𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚 𝒀𝒐𝒔𝒐𝒌𝒂✓' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '©𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚 𝒀𝒐𝒔𝒐𝒌𝒂✓' //ubah jadi nama mu, note tanda ' gausah di hapus!

// Other
global.owner = ['6285891634201']
global.premium = ['6285891634201']
global.packname = '©𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚 𝒀𝒐𝒔𝒐𝒌𝒂✓'
global.ownerr = '©𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚 𝒀𝒐𝒔𝒐𝒌𝒂✓      🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
global.author = '©𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚 𝒀𝒐𝒔𝒐𝒌𝒂✓'
global.sessionName = 'yosoka'
global.prefa = ['','!','.',',','🔥','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    ban: '*Sorry, looks like u got banned😔😔 type .owner To request unban okay*',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',    
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = { url: 'https://i.ibb.co/GJcLRCL/logo.jpg' }
global.visoka = { url: 'https://a.uguu.se/KOsxUovV.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
