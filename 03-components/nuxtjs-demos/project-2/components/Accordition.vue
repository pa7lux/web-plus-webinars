<template>
  <div :class="['accordition', { accordition__opened: isOpened }]">
    <button
      class="accordition__heading"
      @click="handleClick"
      :aria-expanded="isOpened"
      :aria-controls="heading"
    >
      <span>{{ heading }}</span>
      <svg :class="['accordition__icon', { accordition__icon_opened: isOpened }]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.353553" y1="0.646447" x2="6.35355" y2="6.64645" stroke="black"/>
        <line x1="5.64645" y1="6.64645" x2="11.6464" y2="0.646446" stroke="black"/>
      </svg>
    </button>
    <div
      v-show="isOpened"
      class="accordition__content"
      :aria-labelledby="heading"
    >
      <slot>Контент аккордеона</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style scoped>
.accordition {
  border-bottom: 1px solid #000;
}

.accordition__heading {
  padding: 18px 0;
  font-size: var(--main-font-size);
  line-height: 1.2;
  font-weight: normal;
  border: none;
  background-color: var(--main-bg-color);
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.3s ease;
}

.accordition__heading:hover {
  opacity: 0.5;
}

.accordition__icon {
  width: 12px !important; /* простите, тут надо, чтобы победить флоу с другими картинками внутри правой колонки */
}

.accordition__icon_opened {
  transform: rotate(-180deg);
}

.accordition__heading:focus {
  outline: none;
  opacity: 0.5;
}

.accordition__content {
  position: relative;
  padding-bottom: 24px;
}

.accordition__content /deep/ * {
  font-size: var(--main-font-size);
  line-height: 1.2;
  font-weight: normal;
  margin-bottom: 48px;
}

.accordition__content /deep/ *:first-of-type {
  margin-top: 40px;
}

.accordition__content /deep/ *:last-of-type {
  margin-bottom: 0;
}

@media screen and (max-width: 450px) {
  .accordition__icon {
    display: block !important;
  }
}
</style>
