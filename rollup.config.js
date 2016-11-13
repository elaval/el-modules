import uglify from "rollup-plugin-uglify";
import minify from 'rollup-plugin-minify'
 
let plugins = [];

export default {
	entry: 'src/source.js',
	moduleName: "myApp",
	targets: [
	{
		dest: `js/demo.amd.js`,
		format: "amd",
	} 
	,{
		dest: `js/demo.cjs.js`,
		format: "cjs",
	}	
	,{
		dest: `js/demo.es.js`,
		format: "es",
	}
	,{
		dest: `js/demo.iife.js`,
		format: "iife",
	}
	,{
		dest: `js/demo.umd.js`,
		format: "umd",
	}
	]
};
