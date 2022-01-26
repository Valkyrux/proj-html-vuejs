<template>
    <footer class="container ms_footer">
        <div class="row">
            <div class="col-3 pe-3">
                <h4 class="fs-5 mb-3">About</h4>
                <p><a href="#" class="text-decoration-none">Masterstudy</a>
                is Education WordPress theme feauture
                by Learning Managment System (LMS) for online education. Developed by
                <a href="#" class="text-decoration-none">StylemixThemes</a>.</p>
                <div>
                    <a href="#" class="text-secondary d-inline-block me-2">
                      <font-awesome-icon :icon="[ 'fab', 'facebook' ]" />
                    </a>
                    <a href="#" class="text-secondary d-inline-block me-2">
                      <font-awesome-icon :icon="[ 'fab', 'twitter' ]" />
                    </a>
                   <a href="#" class="text-secondary d-inline-block me-2">
                     <font-awesome-icon :icon="[ 'fab', 'instagram' ]" />
                    </a>
                </div>
            </div>
            <div class="col-3 pe-3">
                <h4 class="fs-5 mb-3">Contact</h4>
                <p>Usa, California 20, first Avenue, California</p>
                <p>Tel: +1 234 135 351<br>Fax: +1 223 453 25</p>
                <p class="text-secondary">info@masterstudy.com</p>
            </div>
            <div class="col-3 pe-3">
                <h4 class="fs-5 mb-3">Pages</h4>
                <ul class="row row-cols-2 text-secondary">
                    <li class="mb-2">Blog</li>
                    <li class="mb-2">Courses</li>
                    <li class="mb-2">Home</li>
                    <li class="mb-2">Membership A..</li>
                    <li class="mb-2">Shortcodes</li>
                    <li class="mb-2">Typography</li>
                </ul>
            </div>
            <div class="col-3 pe-3">
                <h4 class="fs-5 mb-3">Blog</h4>
                <div class="row mb-3">
                    <div class="col-5">
                        <img src="../assets/img/photo-1517520287167-4bbf64a00d66-122x120.jpeg"
                        alt="" class="ms_blog-img">
                    </div>
                    <div class="col-7">
                        <h5 class="ms_blog-post">
                            Our main target is to "Developing Yourself as a Leader"</h5>
                        <small>- August 9, 2018</small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <img src="../assets/img/photo-1490376840453-5f616fbebe5b-122x120.jpeg"
                        alt="" class="ms_blog-img">
                    </div>
                    <div class="col-7">
                        <h5 class="ms_blog-post">
                            Our main target is to "Developing Yourself as a Leader"</h5>
                        <small>- August 9, 2018</small>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";

.ms_footer {
    margin-top: 70px;
    margin-bottom: 50px;
}

.ms_blog-img {
    height: 90px;
}

h5.ms_blog-post {
    font-size: 0.9em;
    color: $gull-gray;
    &~small {
        color: $gull-gray;
        font-weight: 400;
    }
}
</style>
