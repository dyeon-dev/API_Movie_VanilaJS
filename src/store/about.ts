import { Store } from '../core/heropy'

interface State {
    photo: string
    name: string
    email: string
    blog: string
    github: string
    repository: string
}
export default new Store<State>
({
    photo: 'https://velog.velcdn.com/images/kimdayeon37/profile/e293d6bb-435f-4830-8b7a-03453dd1538f/image.jpg',
    name: 'DAYEON',
    email: 'kdy37912@gmail.com',
    blog: 'https://velog.io/@kimdayeon37',
    github: 'https://github.com/kimdayeon37',
    repository: 'https://github.com/kimdayeon37/API_Movie_VanilaJS'
})