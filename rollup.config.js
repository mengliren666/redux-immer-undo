import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

const libraryName = "redux-immer-undo"
const pkg = require("./package.json")

const banner =
	"/*!\n" +
	` * ${libraryName}.js v${pkg.version}\n` +
	` * (c) 2022-${new Date().getFullYear()} DuoR\n` +
	" * The copyright of this software belongs to DuoR.\n" +
	" */"

// tslint:disable-next-line:no-default-export
export default {
	input: `src/${libraryName}.js`,
	output: [
		{
			file: pkg.main,
			name: libraryName,
			format: "umd",
			sourcemap: false,
			globals:{
				immer:"Immer"
			},
			banner
		},
		{
			file: pkg.module,
			name: libraryName,
			format: "es",
			sourcemap: false,
			globals:{
				immer:"Immer"
			},
			banner
		}
	],
	external: [],
	watch: {
		include: "src/**"
	},
	plugins: [
		commonjs(),
		resolve(),
		babel({ babelHelpers: 'bundled' }),
		terser()
		// serve({
		//   open: true,
		//   port: 8000,
		//   contentBase: "./dist"
		// })
	],
	external: [
		"immer"
	]
}
