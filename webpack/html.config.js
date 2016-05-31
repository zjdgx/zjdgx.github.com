import HtmlWebpackPlugin from 'html-webpack-plugin';

let homepage = new HtmlWebpackPlugin({
	filename: './views/index.html',
	template: __dirname + '/src/app.html',
	inject: true,
	chunks: ['react', 'jquery', 'topic'],
	chunkSortMode: function (a, b) {// ≈≈–Ú
		var index = {'topic': 1, 'react': 3, 'jquery': 2},
			aI = index[a.origins[0].name],
			bI = index[b.origins[0].name];
			
		return aI && bI ? bI - aI : -1;
	}
})


export default [homepage];