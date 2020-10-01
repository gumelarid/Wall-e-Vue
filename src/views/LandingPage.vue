<template>
  <div class="lp-container">
    <div class="main-content-1">
      <b-row>
        <b-col md="8" sm="8" class="text-left">
          <h1 class="brand">Wall-E</h1>
        </b-col>
        <b-col md="2" sm="2" class="text-right">
          <b-button class="btn-prim" block>Login</b-button>
        </b-col>
        <b-col md="2" sm="2" class="text-right">
          <b-button class="btn-sec" block>Register</b-button>
        </b-col>
      </b-row>
      <b-row align-v="center" class="text-left">
        <b-col md="6" sm="6">
          <b-img
            class="main-ill"
            :src="require('../assets/illustration/phone.png')"
          />
        </b-col>
        <b-col md="6" sm="6">
          <div class="headline">
            <h1>Awesome App For Saving <span class="primary">Time.</span></h1>
            <p>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <b-button class="btn-sec">Try It Free</b-button>
          </div>
          <div class="download">
            <p>Available on</p>
            <b-row>
              <b-col md="2">
                <b-img :src="require('../assets/icon/gplay.png')" />
              </b-col>
              <b-col md="2">
                <b-img :src="require('../assets/icon/appstore.png')" />
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="main-content-2">
      <b-row align-h="center" align-v="center">
        <b-col>
          <b-img :src="require('../assets/icon/microsoft.png')" />
        </b-col>
        <b-col>
          <b-img :src="require('../assets/icon/dropbox.png')" />
        </b-col>
        <b-col>
          <b-img :src="require('../assets/icon/hnm.png')" />
        </b-col>
        <b-col>
          <b-img :src="require('../assets/icon/airbnb.png')" />
        </b-col>
        <b-col>
          <b-img :src="require('../assets/icon/canon.png')" />
        </b-col>
        <b-col>
          <b-img :src="require('../assets/icon/dell.png')" />
        </b-col>
      </b-row>
    </div>
    <div class="main-content-3">
      <div class="about">
        <b-row class="about" align-v="center" align-h="center">
          <b-col md="8" sm="8">
            <h1><span class="primary">About</span> the Application.</h1>
          </b-col>
          <b-col md="6" sm="6">
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="about-card">
        <b-row>
          <b-col md="4" sm="4">
            <b-card>
              <b-img :src="require('../assets/icon/support.png')" />
              <h1>24/7 Support</h1>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </b-card>
          </b-col>
          <b-col md="4" sm="4">
            <b-card>
              <b-img :src="require('../assets/icon/privacy.png')" />
              <h1>Data Privacy</h1>
              <p>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </b-card>
          </b-col>
          <b-col md="4" sm="4">
            <b-card>
              <b-img :src="require('../assets/icon/download.png')" />
              <h1>Easy Download</h1>
              <p>
                Wall-e is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </p>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="main-content-4">
      <b-row align-v="center" class="text-left">
        <b-col md="6" sm="6">
          <b-img
            class="main-ill"
            :src="require('../assets/illustration/phone.png')"
          />
        </b-col>
        <b-col md="6" sm="6">
          <div class="headline">
            <h1>All The <span class="primary">Great</span> Wall-e Features.</h1>
          </div>
          <div class="features">
            <b-row>
              <b-col md="12">
                <b-card>
                  <h1><span class="primary">1.</span> Small Fee</h1>
                  <p>
                    We only charge 5% of every success transaction done in
                    Wall-e app.
                  </p>
                </b-card>
              </b-col>
              <b-col md="12">
                <b-card>
                  <h1><span class="primary">2.</span> Data Secured</h1>
                  <p>
                    All your data is secured properly in our system and it’s
                    encrypted.
                  </p>
                </b-card>
              </b-col>
              <b-col md="12">
                <b-card>
                  <h1><span class="primary">3.</span> User Friendly</h1>
                  <p>
                    Wall-e come up with modern and sleek design and not
                    complicated.
                  </p>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="main-content-5">
      <div class="feedback">
        <b-row align-v="center" align-h="center">
          <b-col md="8" sm="8">
            <h1>What Users are<span class="primary"> Saying.</span></h1>
          </b-col>
          <b-col md="6" sm="6">
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="feedback-card">
        <b-row align-v="center" align-h="center">
          <b-col md="10" sm="10">
            <b-card>
              <b-img :src="require('../assets/img/img01.png')" />
              <h1>Alex Hansinburg</h1>
              <p>Designer</p>
              <p>
                “This is the most outstanding app that I’ve ever try in my live,
                this app is such an amazing masterpiece and it’s suitable for
                you who is bussy with their bussiness and must transfer money to
                another person aut there. Just try this app and see the power!”
              </p>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lp-container {
  background: #fafcff;
  overflow-x: hidden;
}

.main-content-1 {
  padding: 3rem 6rem;
}

.brand {
  font-weight: bold;
  font-size: 28px;
  color: #6379f4;
  margin: 0;
  padding: 0.5rem 0;
}

.btn-prim {
  background: #ffffff;
  border: 2px solid #6379f4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  font-size: 18px;
  line-height: 25px;
  color: #6379f4;
  padding: 0.5rem 1.7rem;
}

.btn-sec {
  background: #6379f4;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  border: transparent;
  padding: 0.6rem 1.8rem;
}

img.main-ill {
  object-fit: cover;
  max-width: 400px;
  max-height: 700px;
}

.headline,
.download {
  padding: 1rem 0;
}

.headline h1,
.about h1,
.feedback h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 90px;
  color: #3a3d42;
}

.headline h1 .primary,
.about h1 .primary {
  color: #6379f4;
}

.headline,
.download,
.about,
.feedback p {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;
  color: #3a3d42;
}

.main-content-2 {
  padding: 3rem 6rem;
  background: rgba(71, 58, 209, 0.06);
}

.main-content-2 img {
  max-width: 120px;
}

.main-content-3 {
  padding: 3rem 6rem;
}

.about {
  padding: 1rem 0;
}

.about-card {
  padding: 1rem 0;
}

.about-card .card,
.feedback-card .card {
  border: transparent;
  box-shadow: 0px 4px 250px rgba(172, 172, 172, 0.15);
  border-radius: 25px;
}

.about-card .card-body h1,
.feedback-card .card-body h1 {
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  color: #3a3d42;
}

.about-card .card-body p,
.feedback-card .card-body p {
  font-size: 18px;
  line-height: 31px;
  text-align: center;
  color: #3a3d42;
}

.main-content-4 {
  padding: 3rem 6rem;
  background: rgba(71, 58, 209, 0.06);
}

.features .card {
  margin: 10px 0px;
  border: transparent;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
}

.features .card-body h1 {
  font-weight: bold;
  font-size: 20px;
  color: #3a3d42;
}

.features .card-body h1 .primary {
  color: #6379f4;
}

.features .card-body p {
  color: #3a3d42;
  font-size: 14px;
}

.main-content-5 {
  padding: 3rem 6rem;
}

.feedback-card .card {
  border: transparent;
  box-shadow: 0px 4px 250px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  padding: 3rem 2.5rem;
}

.feedback-card .card-body img {
  max-width: 120px;
  max-height: 120px;
  border-radius: 15px;
}
</style>

<script>
export default {
  name: 'LandingPage'
}
</script>
