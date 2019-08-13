import User from './components/user/User.vue';
import SignUp from './components/SignUp.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [
	{
		path: '',
		name: 'home',
		components: {
			default: Home,
			'header-top': Header
		}
	},
	{
		path: '/user',
		components: {
			default: User,
			'header-bottom': Header
		}
	},
	{ path: '*', redirect: '/' },
	{
		path: '/signup',
		components: {
			default: SignUp,
			'header-top': Header
		}
	},
	{ path: '*', redirect: '/' }
];
