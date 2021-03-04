<template>
    <button
        aria-label="Open Menu"
        title="Open Menu"
        class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
        @click="onClickButton"
    >
        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
        ></path>
        <path
            fill="currentColor"
            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
        ></path>
        <path
            fill="currentColor"
            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
        ></path>
        </svg>
    </button>
</template>

<script>
export default {
    props: {
        isMenuOpen: Boolean
    },

    methods: {
        onClickButton (event) {
            this.$emit('click', )
        }
  }
    
}
</script>

<style>

</style>