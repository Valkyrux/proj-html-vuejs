<template>
    <div class="ms_jumbo-container">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-6">
                    <h2 class="fw-light">Limitless learning, more possibilities</h2>
                    <p class="fs-3 fw-light mt-4 mb-5">Online courses open the opportunity for
                        learning to almost anyone,
                        regardless of their scheduling commitments.
                    </p>
                    <button class="text-uppercase rounded-pill
                border-0 text-light ms_button-highlights">read more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Jumbo',
};
</script>

<style lang="scss">
.ms_jumbo-container {
    height: 600px;
    background-image: url(../../assets/img/Untitled-1-1-1-1-1.png);
    .container {
        padding: 0 80px;
    }
    & h2 {
        font-size: 3.2em;
    }
}
</style>
