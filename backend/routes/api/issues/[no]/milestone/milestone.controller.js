import { issueModel } from '@models';
import { verify } from '@lib/utils';
import { errorMessage } from '@lib/constants';

/**
 * PATCH /api/issues/:no/milestone
 */
export const changeMilestone = async (req, res, next) => {
  try {
    const { no } = req.params;
    const { milestoneNo } = req.body;
    if (verify([milestoneNo])) {
      await issueModel.changeIssueMilestone({ no, milestoneNo });
      res.status(200).end();
      return;
    }
    res.status(400).json({ message: errorMessage.MISSING_REQUIRED_VALUE });
  } catch (err) {
    next(err);
  }
};
