<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/" class="navbar-brand">
      <img :src="imageLink" width="35" height="35" class="d-inline-block align-top" alt="" loading="lazy" style="border-radius:10px">
       SB-Bitcoin
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul class="navbar-nav">
        <router-link to="/" activeClass="active" class="nav-item" tag="li">
            <a class="nav-item nav-link" >Home</a>
        </router-link>
        <router-link to="/detail" class="nav-item" tag="li">
            <a class="nav-item nav-link" >Details</a>
        </router-link>
        <router-link to="/calculator" class="nav-item" tag="li">
            <a class="nav-item nav-link" >Calculator</a>
        </router-link>
    </ul>
  </div>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</template>

<script>
export default {
    data (){
        return{
            imageLink: 'https://www.zdnet.de/wp-content/uploads/2013/08/bitcoin.jpg',
        }
    }
}
</script>
