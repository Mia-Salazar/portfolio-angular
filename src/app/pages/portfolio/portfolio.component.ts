import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  filteredButton = 'all';
  vueList: PortfolioItem[] = [];
  reactList: PortfolioItem[] = [];
  allList: PortfolioItem[] = [];
  filteredPortfolio = [];
  listLimit = 5;
  portfolios = [
    { link: 'https://github.com/Mia-Salazar/spotiapp', tech:'Angular, Typescript, API Rest, CSS3, HTML5, SASS, Grid, Flexbox, Boostrap 4', image: '../../../assets/images/spotiapp.jpg', clicked: false, angular: true, vue: false, react: false },
    { link: 'https://github.com/Mia-Salazar/media-searcher', tech:'Angular, Typescript, API Rest, CSS3, HTML5, SASS, Grid, Flexbox, Boostrap 4, Materialize', image: '../../../assets/images/movie.jpg', clicked: false, angular: true, vue: false, react: false },
    { link: 'https://github.com/Mia-Salazar/youtube-angular', tech:'Angular, Typescript, API Rest, CSS3, HTML5, SASS, Grid, Flexbox, Boostrap 4', image: '../../../assets/images/crusha.jpg', clicked: false, angular: true, vue: false, react: false },
    { link: 'https://github.com/Mia-Salazar/crud-heroes', tech:'Angular, Typescript, API Rest, CSS3, HTML5, SASS, Grid, Flexbox, Boostrap 4, Materialize', image: '../../../assets/images/wizard.jpg', clicked: false, angular: true, vue: false, react: false },
    { link: 'https://github.com/Mia-Salazar/redux-todo', tech:'Angular, Typescript, Redux, CSS3, HTML5, SASS, Grid, Flexbox', image: '../../../assets/images/todo.jpg', clicked: false, angular: true, vue: false, react: false },
    { link: 'http://teresa-salazar.surge.sh/', tech:'Reactjs, Javascript, CSS3, HTML5, BEM, SASS, Grid, Flexbox, i18n, Classnames, librerías, Formspree, lazy load', image: '../../../assets/images/teresa.png', clicked: false, angular: false, vue: false, react: true },
    { link: 'http://mia-search-movies-project.surge.sh/', tech:'Reactjs, Javascript, Bulma, CSS3, HTML5, CSS3, Flexbox', image: '../../../assets/images/movies.png', clicked: false, angular: false, vue: false, react: true },
    { link: 'https://www.happets.com/', tech:'JavaScript, jQuery, SASS, HTML5, CSS3, Flexbox, Grid, Bootstrap 4', image: '../../../assets/images/happets.png', clicked: false, angular: false, vue: false, react: false },
    { link: 'https://www.happets.com/login', tech:'React, React hooks, Gatsby, storybook, testing, i18n, JavaScript, SASS, HTML5, CSS3, Flexbox, Grid', image: '../../../assets/images/happets-2.png', clicked: false, angular: false, vue: false, react: true },
    { link: 'http://mia-tic-tac-toe.surge.sh/', tech:'React Hooks, styled components, i18n, proptypes, classnames, HTML5, CSS3, SASS', image: '../../../assets/images/game.png', clicked: false, angular: false, vue: false, react: true },
    { link: 'https://www.myfleeet.com/', tech:'Vuejs, Nuxtjs, SASS, jQuery, HTML5, CSS3, Flexbox, metodología BEM, Pug, vue-i18n', image: '../../../assets/images/fleeet-landing.png', clicked: false, angular: false, vue: true, react: false },
    { link: 'https://www.myfleeet.com/client/catalog', tech:'Vuejs, Nuxtjs, SASS, jQuery,HTML5, CSS3, Flexbox,metodología BEM, Pug, vue-i18n', image: '../../../assets/images/fleeet-catalog.png', clicked: false, angular: false, vue: true, react: false },
    { link: 'http://xcjgames.com/', tech:'jQuery, Bootstrap 4, HTML5, CSS3, Flexbox, diseño', image: '../../../assets/images/xcj.png', clicked: false, angular: false, vue: false, react: false },
  ];


  constructor() { }

  ngOnInit(): void {
    this.filter('all');
  }

  loadMore() {
    this.listLimit += 5;
  }

  filter(type: string) {
    this.listLimit = 5;
    if (type === 'all') {
      this.filteredPortfolio = this.portfolios;
    } else {
      this.filteredPortfolio = 
      this.portfolios.filter(element => element[type] === true);
    }
    this.filteredButton = type;
  }
}
