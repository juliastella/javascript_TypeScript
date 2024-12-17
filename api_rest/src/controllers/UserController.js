import { UUID } from 'sequelize';
import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async  index(req, res) {
    try{
      const users = await User.findAll();
      return res.json(users)
    }
    catch (e){
      return res.json(null);
    }
  }

  //show

  async  show(req, res) {
    try{
      const user =  await User.findByPk(req.params.id);
      return res.json(user)
    }
    catch (e){
      return res.json(null);
    }
  }

}

export default new UserController();
