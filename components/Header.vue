<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="container">

        <a class="navbar-brand d-flex align-items-center" href="./index.html">
          <div class="header_logo">
            <img src="@/assets/img/logo.svg" alt="Logo">
          </div>
          <div class="header_social_buttons d-none d-md-flex">
            <fa :icon="['fab', 'facebook-f']"/>
            <fa :icon="['fab', 'twitter']"/>
            <fa :icon="['fab', 'instagram']"/>
            <fa :icon="['fab', 'youtube']"/>
          </div>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./post.html">Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact.html">Contact Us</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>