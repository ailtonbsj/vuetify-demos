<template>
  <v-container fluid>
    <h1>Flex Layout</h1>
    <v-card elevation="2">
      <v-card-title>display: flex;</v-card-title>
      <v-card-text
        >Defines an element as a flex container. All children elements are flex
        items. Flex items can be another flex container.</v-card-text
      >
    </v-card>
    <v-row justify="space-around" class="mt-4">
      <v-card elevation="2">
        <v-card-title>flex-direction: row;</v-card-title>
        <v-card-text>
          <div class="flexcontainer">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>flex-direction: column;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="flex-direction: column">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>flex-direction: row-reverse;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="flex-direction: row-reverse">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>flex-direction: column-reverse;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="flex-direction: column-reverse">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="space-around" class="mt-4">
      <v-card elevation="2">
        <v-card-title>flex-wrap: nowrap;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="width: 170px; flex-wrap: nowrap">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>flex-wrap: wrap;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="width: 170px; flex-wrap: wrap">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>flex-wrap: wrap-reverse;</v-card-title>
        <v-card-text>
          <div
            class="flexcontainer"
            style="width: 170px; flex-wrap: wrap-reverse"
          >
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="space-around" class="mt-4">
      <v-card elevation="2">
        <v-card-title>flex-flow: column nowrap;</v-card-title>
        <v-card-text>
          <div
            class="flexcontainer"
            style="height: 190px; flex-flow: column nowrap"
          >
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>flex-flow: column wrap;</v-card-title>
        <v-card-text>
          <div
            class="flexcontainer"
            style="height: 190px; flex-flow: column wrap"
          >
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>flex-flow: column wrap-reverse;</v-card-title>
        <v-card-text>
          <div
            class="flexcontainer"
            style="height: 190px; flex-flow: column wrap-reverse"
          >
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="space-around" class="mt-4">
      <v-card elevation="2">
        <v-card-title>justify-content: flex-start;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="justify-content: flex-start">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>justify-content: center;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="justify-content: center">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>justify-content: flex-end;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="justify-content: flex-end">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="space-around" class="mt-4">
      <v-card elevation="2">
        <v-card-title>justify-content: space-around;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="justify-content: space-around">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>justify-content: space-between;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="justify-content: space-between">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="space-around" class="mt-4">
      <v-card elevation="2">
        <v-card-title>align-items: stretch;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="height: 190px;">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>align-items: baseline;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="height: 190px; align-items: baseline;">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>align-items: center;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="height: 190px; align-items: center;">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2">
        <v-card-title>align-items: flex-start;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="height: 190px; align-items: flex-start;">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
            <v-card elevation="2">
        <v-card-title>align-items: flex-end;</v-card-title>
        <v-card-text>
          <div class="flexcontainer" style="height: 190px; align-items: flex-end;">
            <div>Flex Item1</div>
            <div>Flex Item2</div>
            <div>Flex Item3</div>
            <div>Flex Item4</div>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.flexcontainer {
  display: flex;
  border: 3px solid red;
}

.flexcontainer div {
  border: 3px solid blue;
  width: 45px;
  margin: 0 1px;
}
</style>
