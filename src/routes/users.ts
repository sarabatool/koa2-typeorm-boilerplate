import * as ctrl from '../controllers/users';
import * as Router from 'koa-router';
import config from '../../config/index';
import * as compose from 'koa-compose'
import * as token from '../middlewares/checkJWT'
// process.env.NODE_URL
const router = new Router({
  prefix: `${config.api.baseURL}/users`,
});

router.get('/', token.validate, ctrl.getAll);

router.post('/register', ctrl.register);

router.post('/login', ctrl.login);


const routes = router.routes();


export default compose([routes]);