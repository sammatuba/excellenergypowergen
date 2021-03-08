<template>
    <form id="form" class="container mx-auto bg-white shadow rounded" v-on:submit.prevent>
        <div class="w-11/12 mx-auto">
            <div class="container mx-auto">
                <div class="my-8 mx-auto xl:w-full xl:mx-0">
                    <div class="xl:flex lg:flex md:flex flex-wrap justify-between">
                        <div class="form-field-container">
                            <label for="FullName" class="pb-2 text-sm font-bold text-gray-800">
                                Full Name
                            </label>
                            <input type="text" name="fullName" required class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />
                        </div>
                        
                        <div class="form-field-container">
                            <label for="mobile" class="pb-2 text-sm font-bold text-gray-800">
                                Mobile Number
                            </label>
                            <div class="relative">
                                <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="stroke-current text-purple-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input name="mobile" required class="w-full text-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-green-400 rounded border shadow" placeholder="" />
                            </div>
                        </div>

                        <div class="form-field-container">
                            <label for="email" class="pb-2 text-sm font-bold text-gray-800">
                                Email
                            </label>
                            <div class="relative">
                                <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                </div>
                                <input name="email" required class="w-full text-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-green-400 rounded border shadow" placeholder="" />
                            </div>
                        </div>
                        
                        <div class="form-field-container">
                            <label for="StreetAddress" class="pb-2 text-sm font-bold text-gray-800">
                                Street Address
                            </label>
                            <input type="text" id="StreetAddress" name="streetAddress" required class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />
                        </div>

                        <div class="form-field-container">
                            <label for="Region" class="pb-2 text-sm font-bold text-gray-800">
                                Region
                            </label>
                            <div class="border border-gray-300 shadow-sm rounded flex relative">
                                <select type="text" name="region" required class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700 text-gray-800 rounded">
                                    <option value="Switzerland">NCR</option>
                                    <option value="America">Region 1</option>
                                    <option value="Australia">Region 2</option>
                                </select>
                                <div class="px-4 flex items-center border-l border-gray-300 flex-col justify-center text-gray-500 absolute right-0 bottom-0 top-0 mx-auto z-0">
                                    <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 15 12 9 18 15" />-

                                    </svg>
                                    <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-field-container">
                            <label for="Country" class="pb-2 text-sm font-bold text-gray-800">
                                Province
                            </label>
                            <input type="text" id="Province" name="province" required class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />
                        </div>

                        <div class="form-field-container">
                            <label for="State/Province" class="pb-2 text-sm font-bold text-gray-800">
                                City/Municipality
                            </label>
                            <input type="text" id="State/Province" name="state" required class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />
                        </div>

                        <div class="form-field-container">
                            <label for="State/Province" class="pb-2 text-sm font-bold text-gray-800">
                                Average Monthly Electricity Bill
                            </label>
                            <input type="text" id="State/Province" name="state" required class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-center rounded-bl rounded-br">
            <button class="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none" type="submit">Submit</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
        }
    }
};
</script>

<style scoped>
    .form-field-container {
        @apply xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6
    }
</style>
