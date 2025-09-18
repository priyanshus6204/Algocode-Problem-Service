const express = require('express');

const { ProblemController } = require('../../controllers/index.js');

const problem_Router = express.Router();

//test
problem_Router.get('/test', ProblemController.PingProblemController);


problem_Router.get('/:id', ProblemController.getProblem);
problem_Router.get('/', ProblemController.getProblems);
problem_Router.post('/', ProblemController.addProblem);
problem_Router.delete('/:id', ProblemController.deleteProblem);
problem_Router.put('/:id', ProblemController.updateProblem);

module.exports = problem_Router;
