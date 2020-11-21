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
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Datatable</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/datatable-crud">
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Datatable CRUD</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/form-validation">
          <v-list-item-icon>
            <v-icon>mdi-form-select</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Form Validation</v-list-item-title>
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
      drawer: false
    }
  }
}
</script>

<style></style>
