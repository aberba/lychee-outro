var ffmpeg = require("fluent-ffmpeg");

export async function GET(req) {
	return Response.json({ data: "hello" });
}

async function gen1({ text, outputFile }) {
	return new Promise((resolve, reject) => {
		ffmpeg()
			.input("color=black:r=25")
			.inputFormat("lavfi")
			.autopad("black")
			.size("720x?")
			.duration(4)
			.videoCodec("libx264")
			.aspectRatio("9:16")
			.videoFilter(
				`drawtext=text='${text}':fontfile=./font.ttf:fontsize=32:fontcolor=#FF00F2:x=(w-text_w)/2:y=(h-text_h)/2`
			)

			.on("end", function () {
				resolve();
			})
			.on("error", function (err) {
				reject(err);
			})
			.save(outputFile);
	});
}

async function gen2({ outputFile }) {
	return new Promise((resolve, reject) => {
		ffmpeg()
			.input("color=black:r=25")
			.inputFormat("lavfi")
			.autopad("black")
			.size("720x?")
			.duration(16)
			.videoCodec("libx264")
			.aspectRatio("9:16")

			.on("end", function () {
				resolve();
			})
			.on("error", function (err) {
				reject(err);
			})
			.save(outputFile);
	});
}

async function gen3({ firstFile, secondFile, outputFile }) {
	return new Promise((resolve, reject) => {
		ffmpeg(firstFile)
			.input(secondFile)
			.on("end", function () {
				resolve();
			})
			.on("error", function (err) {
				reject(err);
			})
			.mergeToFile(outputFile);
	});
}

export async function POST(req) {
	try {
		const { cta } = await req.json();

		const firstFile = "./output-outro/out1.mp4";
		const secondFile = "./output-outro/out2.mp4";
		const finalFile = "./output-outro/final.mp4";

		await gen1({ text: cta, outputFile: firstFile });
		await gen2({ outputFile: secondFile });
		await gen3({ firstFile, secondFile, outputFile: finalFile });

		return Response.json({ message: "Video processed successfully!" });
	} catch (error) {
		console.error({ error });
		return Response.json({ code: 500, message: "Server error" });
	}
}
