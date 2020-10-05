<template>
  <div class="lp-container">
    <div class="main-content-1">
      <b-row>
        <b-col md="8" sm="8" class="text-left">
          <h1 class="brand">Wall-e</h1>
        </b-col>
        <b-col md="2" sm="2" class="text-right">
          <router-link to="/login">
            <b-button class="btn-prim">Login</b-button>
          </router-link>
        </b-col>
        <b-col md="2" sm="2">
          <router-link to="/register">
            <b-button class="btn-sec">Register</b-button>
          </router-link>
        </b-col>
      </b-row>
      <b-row align-v="center" class="text-left">
        <b-col md="6" sm="6">
          <b-img
            class="main-ill"
            :src="require('../assets/illustration/phone.png')"
          />
        </b-col>
        <b-col md="5" sm="5">
          <div class="headline">
            <h1>Awesome App For Saving <span class="primary">Time.</span></h1>
            <p>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <router-link to="/login">
              <b-button class="btn-sec">Try It Free</b-button>
            </router-link>
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
    <div class="main-content-3 text-center">
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
    <div class="main-content-5 text-center">
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
    <div class="main-content-6">
      <b-row class="footer">
        <b-col>
          <b-row class="brand">
            <b-col md="5" sm="5">
              <h1>Wall-e</h1>
            </b-col>
          </b-row>
          <b-row class="description">
            <b-col md="5" sm="5">
              <p>
                Simplify financial needs and saving much time in banking needs
                with one single app.
              </p>
            </b-col>
          </b-row>
          <b-row class="line">
            <b-col md="12">
              <hr />
            </b-col>
          </b-row>
          <b-row class="contact">
            <b-col md="4">
              <p>© 2020 Wall-e. All right reserved</p>
            </b-col>
            <b-col md="2" offset-md="3" class="text-right">
              <p>08772248740</p>
            </b-col>
            <b-col md="3" class="text-right">
              <p>wallecorps@gmail.com</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style src="../assets/style/landingpage_style.css"></style>

<script>
export default {
  title: 'Landing Page | Wall-e',
  name: 'LandingPage'
}
</script>
