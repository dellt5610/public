# typescript
typescript notes<br/>
Typescript: www.typescriptlang.org<br/>
Install typescript: npm install typescript -g<br/>
Print the typescript's version: tsc -v<br/>
Initializes a TypeScript project and creates a tsconfig.json file.: tsc —init<br/>
Create 03 dirs:<br/>
    1. “src” dir to write main code.<br/>
    2. “test” dir to write test code.<br/>
    3. “dist” dir to compile ts->js<br/>
Configure in the tsconfig.json file:<br/>
-> rootDirs: [“./src”, “./test”]<br/>
-> outDir: “./dist”<br/>
<br/>
In "src" dir, create the file index.ts<br/>
In "test" dir, create the file test-helper.js<br/>
<br/>
To compile ts -> js, type: tsc -w<br/>