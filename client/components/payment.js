const PaymentComponent = {

    props: ['item'],
  
    template: `
    <div>
    <form>
        Betala med Faktura <input type="radio" name="frakt" value="faktura">
        <br/>
        Betala med Kort <input type="radio" name="frakt" value="kort">
    </form>
    
    </div>

    `
  
  }