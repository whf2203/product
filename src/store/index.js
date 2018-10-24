import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index
    },
    plugins: [Logger()]
})