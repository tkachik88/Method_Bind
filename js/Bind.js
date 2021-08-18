'use strict'

let obj = {
	name: 'San SanЫch'
}

function info (phone, email){
	console.log( `${this.name}, ${phone}, ${email}`);
}

function func (fn, context, ...rest){
	return fn.bind(context, ...rest)
}
func(info, obj)('050-888-88-88', 'SanSaN@mail.ru')
func(info, obj, '050-888-88-88',)('SanSaN@mail.ru')
func(info, obj, '050-888-88-88', 'SanSaN@mail.ru')()