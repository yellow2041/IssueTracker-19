import express from 'express';
import * as assigneeController from './assignees.controller';

const router = express.Router({ mergeParams: true });

router.post('/', assigneeController.addIssueAssignee);
router.delete('/:assigneeNo', assigneeController.deleteIssueAssignee);

export default router;
