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

    <h2 class="text-h4 my-3">CRUD Actions</h2>
    <v-data-table :headers="headersCrud" :items="users" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Meu CRUD</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon color="blue darken-1" class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon color="red darken-1" @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
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
      loadingData: true,
      // CRUD
      headersCrud: [
        { text: 'Name', value: 'name', groupable: false },
        { text: 'Gmail', value: 'gmail', groupable: false },
        { text: 'Email', value: 'email', groupable: false },
        { text: 'Gsuite', value: 'gsuite', groupable: false },
        { text: 'Whatsapp', value: 'phone', groupable: false },
        { text: 'Instituição', value: 'organization', align: 'right' },
        { text: 'Departamento', value: 'department', align: 'right' },
        { text: 'Cargo', value: 'role', align: 'right' },
        { text: 'Ações', value: 'actions', sortable: false }
      ]
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
            console.log(this.organizationIn)
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
      this.users = [
        {
          name: 'João Mario da Silva',
          gmail: 'joao.mario@gmail.com',
          email: 'joao.mario@local.host',
          gsuite: 'joao.mario@suite.g',
          phone: '88998877665',
          organization: 'Empresa 1',
          role: 'Frontend Developer',
          department: 'Vendas'
        },
        {
          name: 'Maria Ana Borges Lima',
          gmail: 'maria.ana@gmail.com',
          email: 'maria.ana@local.host',
          gsuite: 'maria.ana@suite.g',
          phone: '88998877445',
          organization: 'Empresa 2',
          role: 'Backend Developer',
          department: 'Marketing'
        },
        {
          name: 'Simon Bouchard',
          gmail: 'simonbouchard@gmail.com',
          email: 'simonbouchard@local.host',
          gsuite: 'simonbouchard@suite.g',
          phone: '8649563741',
          organization: 'Empresa 1',
          role: 'Growth Hacker',
          department: 'Marketing'
        },
        {
          name: 'Alexander Pearson',
          gmail: 'pearson@gmail.com',
          email: 'pearson@local.host',
          gsuite: 'pearson@suite.g',
          phone: '8649563741',
          organization: 'Empresa 3',
          role: 'Vendedor',
          department: 'Vendas'
        },
        {
          name: 'Lotfi Staps',
          gmail: 'lotfi.staps@gmail.com',
          email: 'lotfi.staps@example.com',
          gsuite: 'lotfi.staps@suite.g',
          phone: '3334056098',
          organization: 'Empresa 1',
          role: 'CEO',
          department: 'Gabinete'
        },
        {
          name: 'Adolfo Navarro',
          gmail: 'adolfo.navarro@gmail.com',
          email: 'adolfo.navarro@example.com',
          gsuite: 'adolfo.navarro@suite.g',
          phone: '923815330',
          organization: 'Empresa 1',
          role: 'COO',
          department: 'Gabinete'
        },
        {
          name: 'Samuel Arias',
          gmail: 'samuel.arias@gmail.com',
          email: 'samuel.arias@example.com',
          gsuite: 'samuel.arias@suite.g',
          phone: '940200533',
          organization: 'Empresa 2',
          role: 'CTO',
          department: 'Gabinete'
        }
      ]
      this.loadingData = false
    }, 1000)
  }
}
</script>

<style>
</style>
