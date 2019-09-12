function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator ( func ) {
    this.bind(func)
	console.log (this)
}

testFunc = modificator( sampleFunc )

testFunc()