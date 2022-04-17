<template>
  <div>
    <p>学校名称：{{ name }}</p>
    <p>学校名称：{{ address }}</p>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "XXX学校",
      address: "XXX路"
    }
  },
}
</script>