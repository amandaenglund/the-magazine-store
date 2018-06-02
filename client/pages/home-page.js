const HomePageComponent = {

  template: `
    <div>
    <div class="row">
      <h1 class="col-12">Detta är en startsida</h1>
      <h3 class="col-12">Senast tillagda produkter</h3>
      <product
            v-for="product in Products"
            v-bind:item="product"
            v-bind:key="product._id"
          ></product>
    </div></div>
  `,


  data() {
    return {
      products: []
    }
  },


  created() {
    http.get('/rest/products').then((response) => {
      this.products = response.data.slice(0,3);
    }).catch((error) => {
      console.error(error);
    })
  }


}