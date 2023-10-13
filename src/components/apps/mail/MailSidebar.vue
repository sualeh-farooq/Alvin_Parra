<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useMailStore } from '@/stores/apps/mail';
import MailCompose from './MailCompose.vue';

const store = useMailStore();

onMounted(() => {
  store.fetchMails();
  store.filterMails(store.activeFilter);
});

const getCounts: any = computed(() => {
  return store.mails;
});

const itemCount = getCounts;
type ItemsType = {
  text?: String;
  icon?: String;
  label?: any;
  iconColor?: String;
  header?: String;
  divider?: Boolean;
  slug?: String;
};

const filter = computed(() => {
  return store.activeFilter;
});

const handleFilter = async (string: string) => {
  store.SelectFilter(string);
  await store.filterMails(string);
};

const allCount = computed(() => {
  return getCounts.value.filter((i: any) => !i.isRead).length;
});
const inboxCount = computed(() => {
  return getCounts.value.filter((i: any) => !i.spam && !i.isRead).length;
});
const sentCount = computed(() => {
  return getCounts.value.filter((i: any) => i.sent && !i.isRead).length;
});

const trashCount = computed(() => {
  return getCounts.value.filter((i: any) => i.trash && !i.isRead).length;
});
const items = ref<ItemsType[]>([
  { text: 'All Mail', slug: 'all', icon: 'mdi-email-outline', label: allCount },
  { text: 'Inbox', slug: 'inbox', icon: 'mdi-inbox', label: inboxCount },
  { text: 'Sent', slug: 'sent', icon: 'mdi-send-outline', label: sentCount },
  { text: 'Draft', slug: 'draft', icon: 'mdi-notebook-outline' },
  { text: 'Spam', slug: 'spam', icon: 'mdi-alert-outline' },
  { text: 'Trash', slug: 'trash', icon: 'mdi-delete-outline', label: trashCount },
  { divider: true },
  { header: 'Filters' },
  { text: 'Starred', slug: 'starred', icon: 'mdi-star-outline' },
  { text: 'Important', slug: 'important', icon: 'mdi-bookmark-outline' },
  { divider: true },
  { header: 'Label' },
  { text: 'Promotions', slug: 'promotions', icon: 'mdi-label-outline', iconColor: 'text-primary' },
  { text: 'Forums', slug: 'forums', icon: 'mdi-label-outline', iconColor: 'text-warning' }
]);
const dialog = ref(false);
</script>
<template>
  <div>
    <v-btn color="primary" block size="large" @click="dialog = true"><CirclePlusIcon />&nbsp; Compose</v-btn>
    <v-list>
      <template v-for="(item, i) in items" :key="i">
        <v-divider v-if="item.divider" class="my-6"></v-divider>
        <v-list-subheader v-else-if="item.header">{{ item.header }}</v-list-subheader>
        <v-list-item
          :value="item"
          :active="filter === item.slug"
          @click="handleFilter(`${item.slug}`)"
          active-color="secondary"
          class="rounded-sm"
          v-else
        >
          <!---If icon-->
          <template v-slot:prepend>
            <v-icon :class="`icon-width ${item.iconColor}`">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
          <!---If any chip or label-->
          <template v-slot:append v-if="item.label">
            <v-chip class="sidebarchip hide-menu" :size="'small'">
              {{ item.label }}
            </v-chip>
          </template>
        </v-list-item>
      </template>
    </v-list>
    <v-dialog v-model="dialog" maxWidth="600" height="700">
      <MailCompose @closeDialog="dialog = false" />
    </v-dialog>
  </div>
</template>
<style lang="scss">
.v-list-item__prepend > .v-icon.icon-width {
  margin-inline-end: 15px;
}
</style>
