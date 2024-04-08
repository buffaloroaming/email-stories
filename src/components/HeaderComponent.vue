<template>
  <!--header login EN -->
  <table
    role="presentation"
    align="center"
    style="width: 75%; border: 0; border-spacing: 0"
    class="w93"
  >
    <tr>
      <td style="padding: 24px 0px; vertical-align: middle">
        <a href="https://oportun.com"
          ><img
            src="https://res.cloudinary.com/oportun/image/upload/email/logos/opo-logo-lm.png"
            alt=""
            width="111"
            style="display: block; border: 0; padding: 0; outline: 0; width: 100%; max-width: 111px"
            class="lightimage"
        /></a>
        <div class="darkimageWrapper" style="mso-hide: all; display: none">
          <a href="https://digit.app.link/d2-home"
            ><img
              src="https://res.cloudinary.com/oportun/image/upload/email/logos/opo-logo-wht.png"
              alt=""
              width="104"
              style="
                display: none;
                border: 0;
                padding: 0;
                outline: 0;
                width: 100%;
                max-width: 104px;
              "
              class="darkimage"
          /></a>
        </div>
      </td>
      <td v-if="logInButton" align="right" style="padding: 24px 0px; vertical-align: middle">
        <!-- cta outlined / log in --><a
          href="https://oportun.com"
          style="
            text-decoration: none;
            padding: 10px 24px;
            border-radius: 16px;
            display: inline-block;
            mso-padding-alt: 0;
            color: #000001;
          "
          class="btnLogin"
          ><!--[if mso
            ]><i style="letter-spacing: 30px; mso-font-width: -100%; mso-text-raise: 10pt" hidden
              >&nbsp;</i
            ><!
          [endif]--><span style="mso-text-raise: 5pt">Login</span
          ><!--[if mso
            ]><i style="letter-spacing: 30px; mso-font-width: -100%" hidden>&nbsp;</i><!
          [endif]--></a
        ><!-- end cta -->
      </td>
    </tr>
  </table>
  <!-- /header login EN-->
</template>

<script setup>
defineProps({
  logInButton: Boolean
})
</script>

<style scoped>
.btnLogin {
  width: 142px;
  text-align: center;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #000001;
}
</style>
