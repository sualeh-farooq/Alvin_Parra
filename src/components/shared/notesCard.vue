<script >
export default {
  name: 'Notes Card',

  props: {
    date: String,
    noteDescription: String,
    time: String,
    editNote: Function,
    deleteNote: Function,
    editText: String ,
    deleteText: String ,


  },
  data() {
    return {
      rejectedDialog: null,
      editNoteTime: '05:35',
      editNoteDate: '2023-02-10',  // Format as 'YYYY-MM-DD'
      editNoteDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt praesentium illo modi saepe. Reiciendis sequi illum facere tenetur deleniti quo nisi numquam, culpa earum tempora veniam autem iure quas!\n' +
        '                        '

    }

  },
  methods: {
    editNote() {
      this.editNote()
    },
    deleteNote() {
      this.deleteNote()
    },
    updateDate(newDate) {
      this.$emit('update:date', newDate);
    },
  }
}
</script>

<template>
  <div class="w-100 bg-lightprimary  pa-3  rounded-sm border">
    <v-row>
      <v-col cols="12" sm="12" md="8" lg="8">
        <p><strong>{{ date }} {{ time }} </strong></p>
        <p> {{ noteDescription }} </p>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <div class="d-flex align-start justify-end gap-2">
          <v-dialog width="600" v-model="rejectedDialog">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="primary">
                <EditIcon size="18" class="mx-1" />
                {{ editText }}
              </v-btn>
            </template>
            <v-card class="overflow-auto w-100">
              <div class="d-flex border w-100">
                <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                  Edit Note
                </v-card-title>

              </div>
              <v-card-text>
                <v-container>
                  <v-row>



                    <v-col cols="12">
                      <v-textarea filled v-model="editNoteDescription" auto-grow label="Edit Notes Description" rows="4"
                        row-height="20" color="primary" variant="outlined"></v-textarea>
                    </v-col>
                    <v-col cols="12" >
                      <v-file-input
                          multiple
                          label="Upload Attachments"
                      ></v-file-input>
                    </v-col>

                  </v-row>

                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="rejectedDialog = false"> Close
                </v-btn>
                <v-btn color="success" text @click="pendingDialog = false"> Update </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>


          <v-btn @click="deleteNote" color="error"> {{ deleteText }}
            <TrashIcon size="18" class="mx-1" />
          </v-btn>
        </div>
      </v-col>
    </v-row>

  </div>
</template>

<style scoped lang="scss"></style>