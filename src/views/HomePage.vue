<template>
  <div>
    <MainBanner/>
    <h1>League Welcome statement</h1>
    <p>
      lorum 25
      <a href="" target="_blank"></a>
    </p>
    <h3>Diamond location</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1644.570909296558!2d-113.56335969369624!3d53.563780423506266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a021603e1926bf%3A0x4ac062c584685ea7!2sCoronation%20Park!5e1!3m2!1sen!2sca!4v1678156102984!5m2!1sen!2sca" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
  </div>
</template>

<script>
import MainBanner from '@/components/MainBanner';

export default {
  name: 'HomePage',
  components: {
    MainBanner
  }
  
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
