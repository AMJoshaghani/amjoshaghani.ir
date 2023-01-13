<template>
    <div class="basement">
        <h1 class="name" >Amir M. Joshaghani</h1>
        <p class="links">
          <iconI v-for="icon in icons" :key="icon.name" :href="icon.href" :icon="icon.icon" />
        </p>
    </div>
</template>

<script>
import iconI from "@/components/icon";

export default {
  name: 'mainDiv',
  components: {
    iconI
  },
  data: ()=>({
    icons : [
      {
        name: "Github",
        href: "https://github.com/amjoshaghani/",
        icon: "fab fa-github"
      },
      {
        name: "Telegram",
        href: "https://telegram.me/amjoshaghani/",
        icon: "fab fa-telegram"
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/amjoshaghani",
        icon: "fab fa-linkedin"
      },
      {
        name: "Instagram",
        href: "https://instagram.com/amjoshaghani",
        icon: "fab fa-instagram"
      },
      {
        name: "Gmail",
        href: "mailto:amjoshaghani@gmail.com",
        icon: "fas fa-envelope"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/amjoshaghani",
        icon: "fab fa-twitter"
      }
    ]
  })
}
</script>

<style scoped>
</style>
