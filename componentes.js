// const Excel = require('exceljs');
// const PDFMerger = require ( 'pdf-merger-js' );
// const fs = require('fs');
// const { AsyncResource } = require('node:async_hooks');

//.replace(/[^a-zA-Z0-9]/g, ' ') REMOVE CARACTERES ESPECIAS EXCETO ESPAÇO E NUMEROS


module.exports.clickbyattr = async function clickbyattr(page, attr, value, number = 0){
	return new Promise(async (resolve, reject)=>{
		let el = await page.$x("//*[@"+attr+"='"+value+"']")
		console.log(el.length)
		if (el.length > 0) {
			resolve(await el[number].click())
		} else {
			resolve(console.log('não encontrado '+attr))
		}
	})
}


module.exports.backspace = async function backspace(page){
	return new Promise(async (resolve, reject)=>{
		for(let i = 0; i<60 ; i++){
			await page.keyboard.press('Backspace')
		}
		resolve()
	})
}


module.exports.clickbytext = async function clickbytext(page, text, number = 0){
	return new Promise(async (resolve, reject)=>{
		let el = await page.$x("//*[contains(text(), '"+text+"')]");
		console.log(el.length)
		if (el.length > 0) {
			resolve(await el[number].click())
		} else {
			resolve(console.log('não encontrado '+text))
		}
	})
}


module.exports.click = async function click(page, txt, quant){
	return new Promise(async (resolve, reject)=>{
		for(let i=0; i<quant; i++){
			await page.keyboard.press(txt, {delay: 500})
		}	
		resolve()
	})
}


module.exports.getDataEval = async function getDataEval(page, selector){
	return new Promise(async (resolve, reject) =>{
		let data = await page.evaluate(el => el.innerHTML, await page.$(selector))
		resolve(data)
	});
}


module.exports.WriteFile = async function WriteFile(caminhoNome, conteudo){
	return new Promise(async (resolve, reject)=>{
		let stream = fs.createWriteStream(caminhoNome);
		stream.once('open', function(fd) {
			stream.write(conteudo);
			stream.end();
		});
		resolve()
	})
}


module.exports.getExcel = async function getExcel(col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col13, col14, nameFile){
	return new Promise(async (resolve, reject)=>{
		var excel = require('excel4node');
		var workbook = new excel.Workbook();
		var worksheet = workbook.addWorksheet('Planilha 1');
		var worksheet2 = workbook.addWorksheet('Planilha 2');
		var style = workbook.createStyle({
		  	font: {
		  		bold: true,
		    	color: 'black',
		    	size: 14
		  	},
		  	numberFormat: '$#,##0.00; ($#,##0.00); -'
		});
		worksheet.column(1).setWidth(25);
		worksheet.column(2).setWidth(25);
		worksheet.column(3).setWidth(8);
		worksheet.column(4).setWidth(8);
		worksheet.column(5).setWidth(8);
		worksheet.column(6).setWidth(15);
		worksheet.column(7).setWidth(8);
		worksheet.column(8).setWidth(25);
		worksheet.column(9).setWidth(25);
		worksheet.column(10).setWidth(25);
		worksheet.column(11).setWidth(25);
		worksheet.column(13).setWidth(25);
		worksheet.column(14).setWidth(25);
		worksheet.cell(1,1).string(col1).style(style);
		worksheet.cell(1,2).string(col2).style(style);
		worksheet.cell(1,3).string(col3).style(style);
		worksheet.cell(1,4).string(col4).style(style);
		worksheet.cell(1,5).string(col5).style(style);
		worksheet.cell(1,6).string(col6).style(style);
		worksheet.cell(1,7).string(col6).style(style);
		worksheet.cell(1,8).string(col8).style(style);
		worksheet.cell(1,9).string(col9).style(style);
		worksheet.cell(1,10).string(col10).style(style);
		worksheet.cell(1,11).string(col11).style(style);
		worksheet.cell(1,13).string(col13).style(style);
		worksheet.cell(1,14).string(col14).style(style);
		workbook.write(nameFile+'.xlsx');
		resolve()
	})
	
}





module.exports.mergePDFsComponents = async function mergePDFsComponents(pathName1, pathName2, pathName3){
	return new Promise(async (resolve, reject)=>{
		let merger = new PDFMerger();
		await new Promise(r => setTimeout(r, 100));
		merger.add(pathName1);
		if(!pathName2 == ''){ 
			merger.add(pathName2);
		}
		await merger.save(pathName3);
		resolve();
	});
}



module.exports.calc = async function calc(uf, valor){
	return new Promise(async (resolve, reject) =>{
		
		let porcUF = 0;
		let aliInternaUF = 0;
		let fcp = 0;
		let val = String(valor)
		valor = val.substr(0, (val.length - 2)) + "." + val.substr(val.length-2)
		console.log(valor)		

		if(uf == 'AC' || uf == 'AL' || uf == 'ES' || uf == 'GO' || uf == 'MS' || uf == 'MT' || uf == 'PA' || uf == 'PI' || uf == 'RR' || uf == 'SC'){
			aliInternaUF = 17;
		}
		else if(uf == 'AM' || uf == 'AP' || uf == 'BA' || uf == 'CE' || uf == 'DF' || uf == 'MA' || uf == 'MG' || uf == 'PB' || uf == 'PE' || uf == 'PR' || uf == 'RJ' || uf == 'RN' || uf == 'SE' || uf == 'TO'){
			aliInternaUF = 18;
		}
		else if(uf == 'RO' || uf == 'RS'){
			aliInternaUF = 17.5;
		}
		if(uf == 'AL' || uf == 'PI'){
			fcp = 1;
		}
		else if(uf == 'MG' || uf == 'RJ'){
			fcp = 2;
		}
		if(uf == 'MG' || uf == 'PR' || uf == 'RJ' || uf == 'RS' || uf == 'SC'){
			porcUF = 12;
		}
		else{
			porcUF = 7;
		}

		let aliEstadual = 0;
		let totalNota = 0;
		let ICMSinterEstadual = 0;

		
		switch(uf){ 
			case 'MG':
			case 'RJ':
			case 'AL':
			case 'PI':

				aliEstadual = (valor - porcUF)/100;


				totalNota = (valor/aliEstadual);

				dif = (totalNota* (aliInternaUF/100)) - ICMSinterEstadual

				fCp = totalNota * (fcp/100)
				
				Difal = dif + fCp

				resolve(Difal)
				break;

			default:

				aliEstadual = (valor - porcUF)/100;

				totalNota = (valor/aliEstadual);
				

				ICMSinterEstadual = (totalNota * (porcUF/100))

				Difal = (totalNota* (aliInternaUF/100)) - ICMSinterEstadual

				resolve(Difal)
				break;
		}	

	});
}

module.exports.removeFiles = async function removeFile(caminho){
    let fileFolder = fs.readdirSync(caminho);
    for(let each of fileFolder){
        await fs.unlink(caminho+each, (err =>{
            if(err){
                console.log(err)
            }
        
        }))  
    }
}


module.exports.sleep = async function sleep(timeMs){
	return new Promise(resolve => setTimeout(resolve, timeMs));
}



	