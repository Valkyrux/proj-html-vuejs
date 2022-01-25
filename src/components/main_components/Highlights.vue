<template>
  <div class="container">
      <div class="row">
          <div class="col-7 d-flex align-items-center">
            <div>
                <h1>Start Investing in You</h1>
                <p>With over 1200 courses in 18 subjects,
                    you're guaranteed to find something that's is right for you.</p>
                <button class="text-uppercase">join for free</button>
            </div>
          </div>
          <div class="col-5">
              <img src="../../assets/img/base.png" alt="">
          </div>
      </div>
      <div class="row">
          <div class="card col-4 ps-0">
              <div class="card-header">
                    <div><font-awesome-icon :icon="[ 'fas', 'globe-europe' ]" /></div>
                    <h3>Worldwide Recognize</h3>
                </div>
              <div class="card-body">
                  Our online course certificates can be used around
                  the world and also in most popular universities and company.
              </div>
          </div>
          <div class="card col-4">
              <div class="card-header">
                    <div><font-awesome-icon :icon="[ 'fas', 'desktop' ]" /></div>
                    <h3>Mostly Online Learning (sd)</h3>
                </div>
              <div class="card-body">
                  Masterstudy online certificates can be obtained in a range of
                  specialized areas and typical take about a year to complete.
              </div>
          </div>
          <div class="card col-4 pe-0">
              <div class="card-header">
                    <div><font-awesome-icon :icon="[ 'far', 'calendar-check' ]" /></div>
                    <h3>Graduate in as little as 1 Year</h3>
                </div>
              <div class="card-body">
                  Online post-graduate certificates are a popular way to develop you professiona
                  qualifications of Masterstudy
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
};
</script>

<style>

</style>
