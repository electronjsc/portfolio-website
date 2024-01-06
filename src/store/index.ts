import { createStore } from 'vuex'
import Blogs from './modules/blogs'

const store = createStore({
  modules: {
    Blogs,
  }
});

export default store;