import * as ctrl from '../controllers/heores';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import config from '../../config';

const router = new Router({
    prefix: `${config.api.baseURL}/heroes`,
});

router.get('/',ctrl.getAll);

router.post('/',ctrl.save);

router.delete('/:id',ctrl.deleteHero)

const routes = router.routes();
export default compose([routes]);