# autotest_js
Automation Test Javascript Notes
1. run: yarn init //create package.json file <br/>
2. run: yarn add mocha --dev //install mocha test framework and add it into dev_dependencies. <br/>
3. add "test":"nodemon --exec mocha --recursive" into "script" part of package.json <br/>
---call add() function via http--- <br/>
1. run: yarn add express <br/>
2. run: yarn add supertest --dev //to make http tests <br/>

---database automation tests---
1. create helpers/dbProfile.js //select a database profile (production/test/dev) for usage.
2. create helpers/dbConnection.js //connect to a database defined in dbProfile.js
3. create model/story.js //a model from the declared schema
4. create app.js //app.js contains a list of route definitions for Story.
5. create index.js //index.js will be used a main entry of application.
6. create test/main/js/controllers/story/createStory.test.js //test routes of Story creation.
7. create test/main/js/controllers/story/deleteStory.test.js //test routes of Story deletion.
8. create test/main/js/controllers/story/updateStory.test.js //test routes of Story updation.
9. create test/main/js/controllers/story/findStory.test.js //test routes of Story finding.