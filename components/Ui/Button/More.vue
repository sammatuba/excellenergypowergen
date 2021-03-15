<template>
    <button @click="$emit('click')" class="group flex justify-evenly items-center my-4 py-1 px-1 rounded-md border-green outline-none hover:border-transparent hover:shadow  hover:bg-green-yellow focus:outline-none transition duration-150 ease-in" type="button">
        <span class="mx-1 my-1 text-green-dark group-hover:text-green font-bold uppercase">
            <slot></slot>
        </span>
        <svg class="mx-1 my-1 transform group-hover:translate-x-1 transition-transform duration-200 ease-in" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </button>
</template>