<template>
  <v-app id="vuetify-demo">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar size="64">
            <v-img
              src="https://randomuser.me/api/portraits/women/3.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> Admin </v-list-item-title>
            <v-list-item-subtitle>admin@local</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item v-for="route in routes" link :to="route.path" :key="route.name">
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="green" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify demo</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      routes: []
    }
  },
  created () {
    this.routes = this.$router.options.routes.map(route => ({
      name: route.name,
      path: route.path,
      icon: route.icon
    }))
  }
}
</script>

<style></style>
