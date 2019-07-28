# gulp-collate

Take all files (and sub folder) from gulp.src, collate all files from same folder name and rename all files to come from cwd.

  
Given: 
```
src
├── a.txt
├── b.txt
├── c.txt
├── path1
├──		└──assets
├──			├── z.txt
├──	    	├── a.txt
├──	    	└── b.txt
└── path2
		└──path3
			├──
	    	├── y.txt
	    	├── z.txt
			└──assets
				├──
	 	    	├── 1.txt
	    		└── 2.txt
```
  
And:
```
gulp.src( "src/**/assets/**/*" )
	.pipe(collate("assets"))
	.pipe(gulp.dest("dest/"));

```
  
Outputs:
```
dest/
├──	z.txt
├──	a.txt
├──	b.txt
├── 1.txt
└──	2.text

```