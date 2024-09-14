import { Component } from '../core/heropy'
import aboutStore from '../store/about'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
}
render() {
    const { github, repository } = aboutStore.state
    this.el.innerHTML =/* html */`
    <div>
        <a href="${repository}">
            Github Repository
        </a>
        <a href="${github}">
         ${new Date().getFullYear()} DaYeon
    </div>`
}
}