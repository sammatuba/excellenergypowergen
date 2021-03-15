<template>
    <section class="block page-section w-full md:w-3/5">
        <div class="section-heading">
            <PageSectionHeading>
                Sign Up
            </PageSectionHeading>
            <PageSectionSubHeading>
                We offer free energy potential assessment based on your location and average electricity bill.
            </PageSectionSubHeading>
        </div>
        <form id="form" class="flex flex-col bg-white shadow rounded px-4 py-4 md:flex-wrap md:justify-between" v-on:submit.prevent>     
            <div class="flex">
                <!-- First Name -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="firstName" class="form-field-title">
                        First Name
                    </label>
                    <div class="flex mx-2">
                        <input type="text" name="firstName" required class="form-field-input" placeholder="" />
                    </div>
                </div>
                <!-- Last Name -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="lastName" class="form-field-title">
                        Last Name
                    </label>
                    <div class="flex mx-2">
                        <input type="text" name="lastName" required class="form-field-input" placeholder="" />
                    </div>  
                </div>
            </div>         
            <div class="flex">
                <!-- Contact Number -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="mobile" class="form-field-title">
                        Contact Number
                    </label>
                    <div class="relative flex mx-2">
                        <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="stroke-current text-purple-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <input name="mobile" required class="form-field-input" placeholder="" />
                    </div>
                </div>
                <!-- Email Address -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="email" class="form-field-title">
                        Email
                    </label>
                    <div class="relative flex mx-2">
                        <div class=" absolute text-gray-600 flex items-center px-4 border-r h-full">  
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </div>
                        <input name="email" required class="form-field-input" placeholder="" />
                    </div>
                </div>
            </div>
            <!-- Street Address -->
            <div class="flex flex-col mb-4">
                <label for="StreetAddress" class="form-field-title">
                    Street Address
                </label>
                <div class="flex mx-2">
                    <input type="text" id="StreetAddress" name="streetAddress" required class="form-field-input" placeholder="" />
                </div>       
            </div>
            <div class="flex">
                <!-- Region Selector -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="Region" class="form-field-title">
                        Region
                    </label>
                    <div class="flex mx-2">
                        <div class="flex-1 border border-gray-300 shadow-sm rounded flex relative">
                            <select @change="updateProvincesFromRegion" v-model="selectedRegion" type="text" name="region" required class="form-field-select">
                                <option value="" disabled hidden>Select Region</option>
                                <option v-for="(region_name, idx) in region_names" :key="idx" :value="region_name">{{ region_name }}</option>
                            </select>
                            <UiIconFormSelect />
                        </div>
                    </div>
                </div>
                <!-- Province -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="Province" class="form-field-title">
                        District/Province
                    </label>
                    <div class="flex mx-2">
                        <div class="flex-1 border border-gray-300 shadow-sm rounded flex relative">
                            <select @change="updateMunicipalitiesFromProvince" v-model="selectedProvince" type="text" name="province" required :disabled="selectedRegion==''" class="form-field-select">
                                <option value="" disabled hidden>Select Province</option>
                                <option v-for="(province_name, idx) in getProvincesFromRegion" :key="idx" :value="province_name">{{ province_name }}</option>
                            </select>
                            <UiIconFormSelect />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <!-- Municipality -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="City" class="form-field-title">
                        City/Municipality
                    </label>
                    <div class="flex mx-2">
                        <div class="flex-1 border border-gray-300 shadow-sm rounded flex relative">
                            <select @change="updateBarangaysFromMunicipalities" v-model="selectedMunicipality" type="text" name="city" required :disabled="selectedProvince==''" class="form-field-select">
                                <option value="" disabled hidden>Select City/Municipality</option>
                                <option v-for="(municipality_name, idx) in getMunicipalitiesFromProvince" :key="idx" :value="municipality_name">{{ municipality_name }}</option>
                            </select>
                            <UiIconFormSelect />
                        </div>
                    </div>
                </div>
                <!-- Barangay -->
                <div class="flex flex-col mb-4 md:w-1/2">
                    <label for="City" class="form-field-title">
                        Barangay
                    </label>
                    <div class="flex mx-2">
                        <div class="flex-1 border border-gray-300 shadow-sm rounded flex relative">
                            <select v-model="selectedBarangay" type="text" name="city" required :disabled="selectedMunicipality==''" class="form-field-select">
                                <option value="" disabled hidden>Select Barangay</option>
                                <option v-for="(barangay_name, idx) in getBarangaysFromMunicipality" :key="idx" :value="barangay_name">{{ barangay_name }}</option>
                            </select>
                            <UiIconFormSelect />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Average Bill -->
            <div class="flex flex-col mb-4">
                <label for="State/Province" class="form-field-title">
                    Average Monthly Electricity Bill
                </label>
                <div class="flex mx-2">
                    <input type="text" id="State/Province" name="state" required class="form-field-input" placeholder="" />
                </div>
            </div>

            <div class="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-center rounded-bl rounded-br">
                <button class="bg-green font-bold tracking-wider transition duration-150 ease-in-out hover:bg-green-lime rounded text-white px-8 py-2 text-sm focus:outline-none" type="submit">
                    Submit
                </button>
            </div>
        </form>  
    </section>
</template>

<script>
const getNestedLocations = () => import('~/assets/philippine_provinces_cities_municipalities_and_barangays_2019v2_modified.js').then(m => m.default || m)

export default {
    data() {
        return {
             nestedLocations: [],
             selectedRegion: '',
             selectedProvince: '',
             selectedMunicipality: '',
             selectedBarangay: '',
             provincesFromRegion: [],
             municipalitiesFromProvince: [],
             barangaysFromMunicipality: []
        }
    },

    async fetch () {
        this.nestedLocations = await getNestedLocations()
    },

    computed: {
        region_names: function () {
            return this.nestedLocations.map(region => region.region_name )
        },

        getProvincesFromRegion: function () {
            return this.provincesFromRegion.map(province => province.province_name)
        },

        getMunicipalitiesFromProvince: function () {
            return this.municipalitiesFromProvince.map(municipality => municipality.municipality_name)
        },

        getBarangaysFromMunicipality: function () {
            return this.barangaysFromMunicipality
        }
    },

    methods: {
        updateProvincesFromRegion () {
            // reset selections
            this.selectedProvince = ''
            this.selectedMunicipality = ''
            this.selectedBarangay = ''

            const data = this.nestedLocations.filter(region => region.region_name == this.selectedRegion)[0].province_list
            this.provincesFromRegion = Object.keys(data).map(key => Object.assign(data[key], {'province_name': key}))
        },

        updateMunicipalitiesFromProvince () {
            // reset selections
            this.selectedMunicipality = ''
            this.selectedBarangay = ''
            
            const data = this.provincesFromRegion.filter(province => province.province_name == this.selectedProvince)[0].municipality_list
            this.municipalitiesFromProvince = Object.keys(data).map(key => Object.assign(data[key], {'municipality_name': key}))
        },

        updateBarangaysFromMunicipalities () {
            // reset selections
            this.selectedBarangay = ''

            const data = this.municipalitiesFromProvince.filter(municipality => municipality.municipality_name == this.selectedMunicipality)[0].barangay_list
            console.log(this.municipalitiesFromProvince.filter(municipality => municipality.municipality_name == this.selectedMunicipality))
            this.barangaysFromMunicipality = data
        }

    }
};
</script>

<style scoped>
    .form-field-select {
        @apply bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-green-lime text-gray-800 rounded shadow-inner
    }
    .form-field-input {
        @apply flex-1 border border-gray-300 pl-3 py-3 shadow-inner rounded text-sm focus:outline-none focus:border-green-lime text-gray-800
    }
    .form-field-title {
        @apply pb-2 mx-2 uppercase tracking-wide flex-initial text-sm font-bold text-green-dark
    }

</style>
