<template>
    <div class="container-fluid p-5 mt-5">
        <div class="row">
            <div class="col-6">
                <div class="p-5 ms_border">
                    <div class="row">
                        <div class="col-4">
                            <img src="../../assets/img/image_box_1-221x231.png"
                            alt="">
                        </div>
                        <div class="col-8 d-flex flex-column justify-content-center
                        align-items-start">
                            <h3>Become an Istructor</h3>
                            <p class="mt-2 mb-3">Teach what you love, Masterstudy gives you the
                                tools to create a course</p>
                            <button class="text-uppercase">Start teaching</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="p-5 ms_border">
                    <div class="row">
                        <div class="col-4">
                            <img src="../../assets/img/image_box_2-234x231.png"
                            alt="">
                        </div>
                        <div class="col-8 d-flex flex-column justify-content-center
                        align-items-start">
                            <h3>Setup For Business</h3>
                            <p class="mt-2 mb-3">Get Unlimited access to 2500
                                of Udemy's top courses for your team</p>
                            <button class="text-uppercase">Doing Business</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WorkWithUs',

};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_variables.scss";

button {
    background-color: $denim;
    color: $white;
    border-radius: 60px;
    padding: 10px 30px;
    border: 0;
}

h3 {
    font-weight: 400;
}

p {
    color: $gull-gray;
}

.ms_border {
    border: 1px solid $athens-gray;
}
</style>
