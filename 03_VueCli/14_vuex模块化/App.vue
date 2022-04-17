<template>
  <div id="app">
    <Count></Count>
    <br><hr>
    <Person></Person>
  </div>
</template>

<script>
import Count from "@/components/Count";
import Person from "@/components/Person";
export default {
  name: "app",
  components: {
    Count,
    Person
  },
  data(){
    return {}
  },
};
</script>
