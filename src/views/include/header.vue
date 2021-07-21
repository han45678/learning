<template>
  <header>
    <nav>
      <ul>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/user.svg" alt="icon">
          </div>
          <div class="content">
            {{name}}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/time.svg" alt="icon">
          </div>
          <div class="content">
            {{time}}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/currency.svg" alt="icon">
          </div>
          <div class="content">
            {{currency}}
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/star.svg" alt="icon">
          </div>
          <div class="content">
            {{star}}%
          </div>
        </li>
        <li>
          <div class="icon">
            <img src="../../assets/images/icon/level.svg" alt="icon">
          </div>
          <div class="content">
            level{{level}}
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        name: "王小名",
        time: "10:23",
        currency: "654,321",
        star: "100",
        level: "1"
      };
    }
  };
</script>
