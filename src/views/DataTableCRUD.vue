<template>
  <v-container fluid>
    <v-data-table :headers="headers" :items="users" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Meu CRUD</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="850px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">
                Novo Usuário
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Nome">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.gmail" label="Gmail">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.email" label="Email">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.gsuite" label="Gsuite">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.phone" label="Whatsapp">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.organization"
                        label="Instituição"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.department"
                        label="Departamento"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.role" label="Cargo">
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="close"
                  >Cancelar</v-btn
                >
                <v-btn color="green darken-1" text @click="save">Salvar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small color="green darken-1" class="mr-2" @click="editItem(item)"
          >mdi-pencil</v-icon
        >
        <v-icon small color="orange darken-1" @click="deleteItem(item)"
          >mdi-delete</v-icon
        >
      </template>
    </v-data-table>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline text-center">
          Você tem certeza que deseja deletar?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeDelete"
            >Cancelar</v-btn
          >
          <v-btn color="green darken-1" text @click="deleteItemConfirm"
            >Confirmar</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { usersList } from '../dados'

export default {
  data () {
    return {
      headers: [
        { text: 'Nome', value: 'name', groupable: false },
        { text: 'Gmail', value: 'gmail', groupable: false },
        { text: 'Email', value: 'email', groupable: false },
        { text: 'Gsuite', value: 'gsuite', groupable: false },
        { text: 'Whatsapp', value: 'phone', groupable: false },
        { text: 'Instituição', value: 'organization', align: 'right', width: '8rem' },
        { text: 'Departamento', value: 'department', align: 'right', width: '8rem' },
        { text: 'Cargo', value: 'role', align: 'right' },
        { text: 'Opções', value: 'actions', sortable: false }
      ],
      users: [],
      editedItem: {
        name: '',
        gmail: '',
        email: '',
        gsuite: '',
        phone: '',
        organization: '',
        department: '',
        role: ''
      },
      defaultItem: {
        name: '',
        gmail: '',
        email: '',
        gsuite: '',
        phone: '',
        organization: '',
        department: '',
        role: ''
      },
      dialog: false,
      dialogDelete: false,
      editedIndex: -1
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Novo Item' : 'Editar Items'
    }
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      // this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
      // })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },
    deleteItem (item) {
      this.editedIndex = this.users.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    closeDelete () {
      this.dialogDelete = false
      // this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
      // })
    }
  },
  created () {
    this.users = usersList
  }
}
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>
