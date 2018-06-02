const ProductAdminComponent = {
  template: `
    <div class="card-body">
      <h2>Skapa en produkt</h2>
      <form @submit.prevent="submit">
        <label>Namn<br/>
          <input type="text" v-model="name" :disabled="loading" required />
        </label>
        <br/>
        <label>Beskrivning<br/>
          <input type="text" v-model="description" :disabled="loading" />
        </label>
        <br/>
        <label>Artikelnummer<br/>
          <input type="text" v-model="artnr" :disabled="loading"  placeholder="t ex: abc123" />
        </label>
        <br/>
        <label>Pris<br/>
          <input type="text" v-model="price" :disabled="loading" />
        </label>
        <label>Moms<br/>
          <input type="text" v-model="vat" :disabled="loading" />
        </label>
        <br/>
        <button type="submit" :disabled="loading">Spara</button>
        <br/>
        <span v-if="message">{{message}}</span>
      </form>
    </div>
  `,
  data() {
    return {
      name: '',
      description: '',
      price: 0,
      vat: 0.25,
      artnr: '',
      message: '',
      loading: false
    };
  },
  methods: {
    submit() { // save a product
      this.loading = true;
      http.post('/rest/products', {   // här gör vi samma sak som i postman
        name: this.name,
        description: this.description,
        price: this.price,
        vat: this.vat,
        artnr: this.artnr
      }).then(response => {
        console.log(response);
        this.loading = false;
        if(response.data.name) {
          this.message = 'Product saved';
        } else {
          this.message = 'Product not saved';
        }
      }).catch(error => {
        this.loading = false;
        this.message = 'Product not saved';
      });
    }
  }
}


