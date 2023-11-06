<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useGalleryStore } from '@/stores/apps/gallery';

const store = useGalleryStore();

onMounted(() => {
  store.fetchGallery();
});

const getPhotos: any = computed(() => {
  return store.gallery;
});
const searchValue = ref('');
// dropdown data
const actionDD = ref([
  { title: 'Download' },
  { title: 'Delete' }
]);
const page = ref({ title: 'Social Profile' });

const filteredCards = computed(() => {
  return getPhotos.value.filter((card: any) => {
    return card.title.toLowerCase().includes(searchValue.value.toLowerCase());
  });
});

const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '/'
  },
  {
    text: 'Social Profile',
    disabled: true,
    href: '#'
  }
]);
</script>

<template>
  <v-row class="justify-content-end ">
    <v-col cols="12">

<!--      <div class="d-sm-flex align-center gap-3 my-3 my-sm-2">-->
<!--        <v-text-field-->
<!--            color="primary"-->
<!--            hide-details-->
<!--            width="200"-->
<!--            variant="outlined"-->
<!--            persistent-placeholder placeholder="Search"-->
<!--            density="compact"-->
<!--            prepend-inner-icon="mdi-magnify"-->
<!--            v-model="searchValue"-->
<!--        >-->
<!--        </v-text-field>-->
<!--      </div>-->

        <v-row>
          <v-col cols="12" lg="3" md="4" sm="6" v-for="(card, i) in filteredCards" :key="i">
            <v-card variant="outlined" class="card-hover-border bg-gray100">
              <img style="height: 150px" :src="card.image" alt="gallery" class="w-100" />
              <v-card-text class="pa-3">
                <div class="d-flex align-center gap-3">
                  <div>
                    <h4 class="text-h5">{{ card.title }}</h4>
                    <small class="opacity-50 d-block text-truncate d-flex align-center gap-2">
                      <CalendarIcon size="14" /> {{ card.dateTime }}
                    </small>
                  </div>
                  <div class="ml-auto">
                    <v-menu>
                      <template v-slot:activator="{ props }">
                        <v-btn size="x-small" color="primary" v-bind="props" icon variant="text">
                          <DotsVerticalIcon width="14" stroke-width="1.5" />
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item v-for="(item, index) in actionDD" :key="index" :value="index" active-color="secondary">
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

    </v-col>
  </v-row>
</template>
