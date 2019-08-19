import * as ctrl from '../controllers/heroes';
import * as Router from 'koa-router';
import config from '../../config/index';
import * as compose from 'koa-compose'
import * as checkJWT from '../middlewares/checkJWT';
// process.env.NODE_URL
const router = new Router({
  prefix: `${config.api.baseURL}/heroes`,
});

router.get('/', checkJWT.validate, ctrl.getAll);

router.post('/register', ctrl.registerHero);

router.delete('/:id', checkJWT.validate, ctrl.remove);

router.post('/updateHero', checkJWT.validate, ctrl.update);

router.post('/getHero', checkJWT.validate, ctrl.getUser);

const routes = router.routes();

export default compose([routes]);
