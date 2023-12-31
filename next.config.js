/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins.push(
			new webpack.DefinePlugin({
				"process.env.FLUENTFFMPEG_COV": false,
			})
		);

		return config;
	},
	output: "standalone",
};

module.exports = nextConfig;
