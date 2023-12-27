import { resolve } from "styled-jsx/css";

//import ffmpeg from "fluent-ffmpeg";
var ffmpeg = require("fluent-ffmpeg");

export async function GET(req) {
	//const formData = await req.formData();
	//const json = await req.json();

	//console.log({ formData, json });
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
		//const formData = await req.formData();
		const { cta } = await req.json();

		const firstFile = "/tmp/lychee/out1.mp4";
		const secondFile = "/tmp/lychee/out2.mp4";
		const finalFile = "./output-outro/final.mp4";

		await gen1({ text: cta, outputFile: firstFile });
		await gen2({ outputFile: secondFile });
		await gen3({ firstFile, secondFile, outputFile: finalFile });

		//ffmpeg -t 40 -f lavfi -i color=c=black:s=1280x720 -c:v libx265 output.mp4

		return Response.json({ data: "hello" });
	} catch (error) {
		console.error({ error });
		return Response.json({ code: 500, message: "Server error" });
	}
}
