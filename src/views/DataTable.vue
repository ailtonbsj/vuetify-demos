<template>
  <v-container fluid>
    <h1 class="text-h3">Data tables</h1>
    <h2 class="text-h4 my-3">General</h2>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="10"
      class="elevation-1"
      show-group-by
      :sort-by="['organization', 'department', 'role']"
      :sort-desc="[true, true, true]"
      multi-sort
      :loading="loadingData"
      loading-text="Carregando..."
    />
    <h2 class="text-h4 my-3">Custom filter</h2>
    <v-data-table
      :headers="headersFilter"
      :items="users"
      class="elevation-1"
      item-key="name"
      :search="search"
      :custom-filter="filterOnlyLowercase"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Pesquisar"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`body.append`]>
        <tr>
          <td colspan="5"></td>
          <td>
            <v-text-field
              label="Empresa"
              v-model="organizationIn"
            ></v-text-field>
          </td>
          <td colspan="2"></td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { usersList } from '../dados'

export default {
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name', groupable: false },
        { text: 'Gmail', value: 'gmail', groupable: false },
        { text: 'Email', value: 'email', groupable: false },
        { text: 'Gsuite', value: 'gsuite', groupable: false },
        { text: 'Whatsapp', value: 'phone', groupable: false },
        { text: 'Instituição', value: 'organization', align: 'right' },
        { text: 'Departamento', value: 'department', align: 'right' },
        { text: 'Cargo', value: 'role', align: 'right' }
      ],
      users: [],
      search: '',
      organizationIn: '',
      loadingData: true
    }
  },
  computed: {
    headersFilter () {
      return [
        { text: 'Name', value: 'name' },
        { text: 'Gmail', value: 'gmail' },
        { text: 'Email', value: 'email' },
        { text: 'Gsuite', value: 'gsuite' },
        { text: 'Whatsapp', value: 'phone', filterable: false },
        {
          text: 'Instituição',
          value: 'organization',
          filter: val => {
            if (!this.organizationIn) return true
            return parseInt(val.split(' ')[1]) < parseInt(this.organizationIn)
          }
        },
        { text: 'Cargo', value: 'role' },
        { text: 'Departamento', value: 'department' }
      ]
    }
  },
  methods: {
    filterOnlyLowercase (val, search, item) {
      return val != null &&
        search != null &&
        typeof val === 'string' &&
        val.toString().toLocaleLowerCase().indexOf(search.toString().toLocaleLowerCase()) !== -1
    }
  },
  created () {
    setTimeout(() => {
      this.users = usersList
      this.loadingData = false
    }, 1000)
  }
}
</script>

<style>
</style>
