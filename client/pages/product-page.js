const ProductPageComponent = {

  template: `

    <div>
      <search></search>
    </div>
  `,

  created() {
    console.log('ha');
    http.get('/rest/products').then((response) => {
      this.products = response.data.slice(0,3);
    }).catch((error) => {
      console.error(error);
    })
  },

  data() {
    return {
      products: []
    }
  }

}