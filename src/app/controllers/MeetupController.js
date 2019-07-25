import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetupController {
  async store(req, res) {
    const user_id = req.userId;
    const meetup = await Meetup.create({
      ...req.body,
      user_id,
    });
    return res.json(meetup);
  }
}

export default new MeetupController();
