//import ffmpeg from "fluent-ffmpeg";
var ffmpeg = require("fluent-ffmpeg");

export async function GET(req) {
	//const formData = await req.formData();
	//const json = await req.json();

	//console.log({ formData, json });
	return Response.json({ data: "hello" });
}

export async function POST(req) {
	try {
		//const formData = await req.formData();
		const json = await req.json();

		ffmpeg()
			//.input("color=c=black:s=1280x720")
			.inputOptions([
				"-i color=c=black:s=1280x720",
				//"-t 40",
				//"-f lavfi",
				// " -c:v libx265",
			])
			.autopad("black")
			.size("1280x720")
			.duration(40)
			.videoCodec("libx264")
			.aspectRatio("9:16")
			//.format("lavfi")
			.save("./out2.mp4");

		//ffmpeg -t 40 -f lavfi -i color=c=black:s=1280x720 -c:v libx265 output.mp4

		console.log({ json });
		return Response.json({ data: "hello" });
	} catch (error) {
		console.error({ error });
		return Response.json({ code: 500, message: "Server error" });
	}
}
