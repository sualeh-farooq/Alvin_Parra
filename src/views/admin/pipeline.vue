<script>
export default {
    name: 'Pipeline Page',
    data() {
        return {
            title: "Page",
            tab2: null,
            search: '',
            headers: [{ align: 'start', key: 'name', sortable: false, title: 'Dessert (100g serving)' },
            { key: 'calories', title: 'Calories' },
            { key: 'fat', title: 'Fat (g)' },
            { key: 'carbs', title: 'Carbs (g)' },
            { key: 'protein', title: 'Protein (g)' },
            { key: 'iron', title: 'Iron (%)' },
            ],
        };
    },
    components: { KanbanListVue }
}
import { ref } from 'vue'
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { VDataTable } from 'vuetify/labs/VDataTable'
import KanbanList from '@/components/apps/kanban/KanbanList.vue';
import KanbanListVue from '@/components/apps/kanban/KanbanList.vue';


const page = ref({ title: 'Tabs' });
// tabs data
const tab = ref(null);
// const tab2 = ref(null);
const tab3 = ref(null);
const tab4 = ref(null);
const tab5 = ref(null);
const tab6 = ref(null);
const tab7 = ref(null);

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
    <v-row>
        <v-col col="12">
            <v-card variant="outlined" elevation="0" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between">
                        <h3 class="text-h3">Pipelines</h3>
                        <div class="d-flex  justify-end ">
                            <v-btn color="primary" class="mx-1">Add Pipeline +</v-btn>
                            <RouterLink to="/admin/addOpportunity" > 

                            <v-btn color="primary" class="mx-1">
                                Add Opportunity +
                            </v-btn>
                        </RouterLink>
                        </div>
                    </div>
                </v-card-item>
                <v-divider></v-divider>
                <v-card-text>

                    <!-- Content Goes Here -->
                    <v-row>
                        <v-col>
                            <v-tabs v-model="tab2" color="primary">
                                <v-tab value="11">
                                    <UserIcon stroke-width="1.5" width="20" class="v-icon--start" /> Cards View
                                </v-tab>
                                <v-tab value="22">
                                    <UserPlusIcon stroke-width="1.5" width="20" class="v-icon--start" /> List View
                                </v-tab>

                            </v-tabs>

                            <v-window v-model="tab2">
                                <v-window-item value="11">
                                    <KanbanListVue />
                                </v-window-item>

                                <v-window-item value="22">

                                    <v-card-title>
                                        Nutrition
                                        <v-spacer></v-spacer>
                                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                            hide-details></v-text-field>
                                    </v-card-title>
                                    <v-data-table :headers="headers" :items="desserts" :items-per-page="5"
                                        class="elevation-1"></v-data-table>
                                </v-window-item>
                            </v-window>
                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
        </v-col>

    </v-row>
</template>