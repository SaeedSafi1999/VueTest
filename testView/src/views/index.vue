<template>
  <main class="w-100 h-100 d-flex">


    <div class="row">

      <div class="col-6">
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in 5">
              <td> {{idx}}</td>
            </tr>

          </tbody>
        </table>

      </div>

      <div class="m-5 col-6">
        <button @click="addNum" class=" btn btn-primary">
          Submit
        </button>
      </div>

    </div>


  </main>
</template>

<script setup>
function addNum() {
  console.log(10)
}
</script>

<style scoped>
.contanar {
  display: flex;
  flex-direction: column;
}
</style>