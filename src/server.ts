import { App } from '@/app';
import { MessageRoute } from '@routes/messages.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new UserRoute(), new MessageRoute()]);

app.listen();
