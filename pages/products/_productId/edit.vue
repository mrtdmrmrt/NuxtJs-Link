<template>
    <div class="container">
        <h3 class="title">Burası Ürünün Düzenle Sayfası...</h3>
        <p class="subtitle">Ürün ID Bilgisi : <strong>{{$route.params.productId}}</strong></p>
    </div>
</template>
<style scoped>
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 60px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    margin-top: 10px;
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .container {
    min-height: 100vh;
    text-align: center;
    margin-top: 50px;
  }
</style>