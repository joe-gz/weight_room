var express = require('express');
var router = express.Router();

var orgsController = require('../controllers/orgsController');

// Orgs:
router.get('/orgs', orgsController.allOrgs)

router.get('/orgs/:id',orgsController.showOrg)

router.delete('/orgs/:id',orgsController.deleteOrg)

router.put('/orgs/:id',orgsController.updateOrg)

router.post('/orgs',orgsController.createOrg)

module.exports = router;
