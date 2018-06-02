const ShippingComponent = {

    props: ['item'],
  
    template: `
    <div>
    <form>
        Snabb frakt 100kr <input type="radio" name="frakt" value="express">
        <br/>
        Normal frakt 50kr <input type="radio" name="frakt" value="normal">
    </form>
        

    <tr>
        <td>{{title}}</td>
        <td>{{price}}kr</td>
    </tr>
    
    </div>

    `,
    data(){
        return{
        title: "Billig frakt",
        price: "20"
        }
    }
  
  }