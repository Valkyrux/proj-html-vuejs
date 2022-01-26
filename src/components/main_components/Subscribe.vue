<template>
  <div class="container-fluid ms_sub-container">
      <div class="row">
          <div class="col-7">
              <h3>Subscribe our newsletter</h3>
              <p>There are many variation of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humor,
                  or randomised words.</p>
          </div>
          <div class="col-5">
              <h3 class="fw-lighter text-uppercase">Your e-mail address</h3>
              <div class="d-flex">
                <input type="text" placeholder="Enter your E-mail" v-model="email">
                <button class="text-uppercase ms_button-color
                    border-0 text-light" @click="getMail()">Subscribe</button>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    getMail() {
      console.log(`${this.email} thank you`);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";

.ms_sub-container {
    background-color: $shamrock;
    padding: 40px 320px !important;
    color: white;
    & h3 {
        font-size: 1em;
        margin-bottom: 15px;
    }
    & p {
        font-size: 0.9em;
        margin-bottom: 0;
    }
    & input {
        border: 0;
        width: calc(100% - 120px);
    }
    & .ms_button-color {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        font-size: 0.7em;
        background-color: $denim;
    }
}

</style>
