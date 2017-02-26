import { transform } from 'babel-core';
import fs from 'fs';
import assert from 'assert';
import StringReversePlugin from '../src/index';

const babelTranslationOptions = {
		"plugins": [
			StringReversePlugin
		]
};

function readCode(path) {
	let contentFile = fs.readFileSync(path, 'utf-8');
	return contentFile;
}

function testBlock(block) {
		let code = readCode(`${__dirname}/fixtures/${block}/actual.js`);
		let exCode = readCode(`${__dirname}/fixtures/${block}/expected.js`);
		let a = transform(code, babelTranslationOptions); 
		assert(exCode === a.code);
}

describe('Babel Plugin test', function(){
	it('string reverse test Variable' , function(){
		testBlock(`Variable`);
	});
	it('string reverse test TemplateLiteral' , function(){
		testBlock(`TemplateLiteral`);	
	});
	it('string reverse test TemplateLiteral Expresion' , function(){
		testBlock(`TemplateLiteralExpression`);	
	});
});