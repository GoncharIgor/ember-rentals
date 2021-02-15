import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    // based on 2 arguments: @rentals and @query
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}
