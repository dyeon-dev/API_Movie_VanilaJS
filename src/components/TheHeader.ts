import { Component } from '../core/heropy'

interface State {
  [key: string]: unknown
  menus: {
    name: string
    href: string
  }[]
}
export default class TheHeader extends Component {
  public state!: State // this 키워드로 접근하는 속성을 선언할 때 별도의 값으로 초기화 하지 않더라도 에러를 발생시키지 않는 할당 단언
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a
        href="#/"
        class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash // boolean
            return /* html */ `
              <li>
                <a
                  class="${isActive ? 'active' : ''}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://velog.velcdn.com/images/kimdayeon37/profile/e293d6bb-435f-4830-8b7a-03453dd1538f/image.jpg" alt="User">
      </a>
    `
  }
}