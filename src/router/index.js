import Vue from 'vue'
import Router from 'vue-router'
import Wrap from '@/components/Wrap'
import BooksView from '@/components/BooksView'
import LandingPage from '@/components/LandingPage'
import SubjectsPage from '@/components/SubjectsPage'
import Videos from '@/components/Videos'
import Quiz from '@/components/Quiz'
import Profile from '@/components/Profile'
import SingleBook from '@/components/SingleBook'
import SingleVideo from '@/components/SingleVideo'
import StartQuiz from '@/components/StartQuiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/subject',
      name: 'SubjectsPage',
      component: SubjectsPage
    },
    {
      path: '/home',
      name: 'Wrap',
      component: Wrap,
      children: [      
        {
          path: '/books',
          name: 'BooksView',
          component: BooksView
        },
        {
          path: '/videos',
          name: 'Videos',
          component: Videos
        },
        {
          path: '/quiz',
          name: 'Quiz',
          component: Quiz
        },
        {
          path: '/start-quiz',
          name: 'StartQuiz',
          component: StartQuiz
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/read-book',
          name: 'SinlgeBook',
          component: SingleBook
        },
        {
          path: '/watch-video',
          name: 'SingleVideo',
          component: SingleVideo
        }
      ]
    }
  ]
})
