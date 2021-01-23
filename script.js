let { spawn } = require("child_process");
let cmd = spawn("cmd", ["/c", "cd D:/ & dir"]);

cmd.stdout.on("data", data => {
	let content = data.toString();
	let regex = /\d\d\/\d\d\/\d{4}\s\s\d\d:\d\d\s([AaPp][Mm])\s{4}.*/gi;
	let result = content.match(regex);

	if(result) {
		console.log(result)
	}
})