import User from './components/user/User.vue';
import SignUp from './components/SignUp.vue';
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
			'header-top': Header
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
