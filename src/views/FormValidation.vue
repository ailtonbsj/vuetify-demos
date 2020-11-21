<template>
  <v-container fluid>
    <v-form ref="form" v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="[rules.required, rules.maxLen]"
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="email"
        :rules="[rules.required, rules.email]"
      ></v-text-field>
      <v-select
        label="Item"
        :items="items"
        v-model="select"
        :rules="[rules.required]"
      ></v-select>
      <v-checkbox
        label="Do you agree?"
        v-model="checkbox"
        :rules="[rules.required]"
      ></v-checkbox>
      <v-btn color="success" class="mr-4" @click="validate">Validate</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
      <v-btn color="warning" class="mr-4" @click="resetValidation">Reset Validation</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    name: '',
    email: '',
    select: null,
    checkbox: false,

    rules: {
      required: v => !!v || 'Required.',
      maxLen: v => v === '' || (v && v.length <= 10) || 'Must be less than 10 characters',
      email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    }
  }),
  methods: {
    validate () {
      console.log(this.valid)
      if (this.$refs.form.validate()) alert('Validado!')
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style>
</style>
