<script>
export default {
    name: 'Pipeline Page',
    data() {
        return {
            title: "Page"

        }
    }
}
import { ref } from 'vue'
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';


const page = ref({ title: 'Tabs' });

const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Tabs',
        disabled: true,
        href: '#'
    }
]);

</script>


<template>
    <v-col cols="12" md="12">
        <v-card variant="outlined" elevation="0" class="px-4 py-3 m-0 withbg">
            <v-row no-gutters class="align-center">
                <v-col md="5">
                    <h3 class="text-h3">Pipelines</h3>
                </v-col>

                <v-col md="7" sm="12" cols="12">

                </v-col>
            </v-row>
        </v-card>
        
    </v-col>

    
</template>