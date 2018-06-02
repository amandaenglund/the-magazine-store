const MenuComponent = {

  template: `
    <div class="row" id="menustyle">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Hem</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Produkter</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">Kundvagn</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/member">Login | Registrering</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
  `


}