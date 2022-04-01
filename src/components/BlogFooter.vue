<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-desc">
        <p>你把问题留到最后，问题也把你留到最后......</p>
      </div>
      <div class="version-msg">
        <p>VERSION: 1.0.0</p>
        <p>Do have faith in what your're doing</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogFooter'
}
</script>

<style>
  .footer {
    height: 100%;
    width: 70%;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
  }
  
  .footer-desc p {
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: 300;
    color: #999;
  }
  .version-msg {
    margin-top: 15px;
  }
  .version-msg p {
    margin-bottom: 7px;
    font-size: 13px;
    color: #bdbbbb;
    font-weight: 300;
  }
  .version-msg p:nth-child(1) {
    font-size: 12px;
  }
</style>