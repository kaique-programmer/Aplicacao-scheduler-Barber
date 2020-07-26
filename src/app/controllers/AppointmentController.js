import Appointment from '../models/Appointment';

class AppointmentController {
  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new AppointmentController();
