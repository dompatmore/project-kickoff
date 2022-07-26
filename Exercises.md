# TDD With CircleCI

Today we looked at how you could use Cypress and CircleCI to take a TDD approach to working with Express. Here are some exercises you could try to help you get more comfortable.

1. Head over to https://cypress.io and explore the getting started guide. Create a small project and walk through the tutorial.

2. In you group, discuss the structure of the Cypress folder. Does it work for your team? Would you prefer keeping all the tests in one place? How might you go about this?

3. In pairs, decide what your first Cypress test should be. At the least, it should check that:
    - the page is accessible
    - the title of the page is correct
    - some of the content on the page is expected.

    Runs the tests locally *without* writing the required code to make them pass.

4. Now that you have tests that are red, do the minimum amount of work to make them green ( You may want to follow the guide here: http://expressjs.com/en/starter/installing.html) .
At this point you may find you need to open two server tabs, so check out https://github.com/bahmutov/start-server-and-test. 

5. Once you all can get your tests passing locally, try to set up your project in Circle CI. This make take a few goes, but when you reach see that 'Success' button, celebrate!

6. (Stretch Goal) Now that you can run your tests on Circle CI, is there a way for you to deploy your working,tested code from there to Heroku?