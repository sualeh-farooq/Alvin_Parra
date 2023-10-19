
<script>
import {ref} from 'vue';
import {Table, Switch, Space, Button} from 'ant-design-vue'

const column = [
  {
    title: 'Generation',
    dataIndex: 'generation',
    key: 'generation',
  },
  {
    title: 'Code Number',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Base #',
    dataIndex: 'baseNo',
    key: 'baseNo'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: '% Level',
    dataIndex: 'perLevel',
    key: 'perLevel'
  },
  {
    title: 'License Number',
    dataIndex: 'license',
    key: 'license'
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action'
  },

];
const tableData = [
  {
    key: 1,
    generation: '1',
    code: 1200,
    name: 'John Doe',
    baseNo: 4,
    status: 'Active',
    perLevel: 'Reg Dir (90%)',
    license: 'DKH-2903',
    children: [
      {
        key: 2,
        generation: '2',
        code: 1201,
        name: 'Mark Hernandez',
        baseNo: 6,
        status: 'Active',
        perLevel: 'Assoc (70%)',
        license: 'DKH-2784',
        children: [
          {
            key: 3,
            generation: '3',
            code: 1202,
            name: 'Elon Musk',
            baseNo: 7,
            status: 'Active',
            perLevel: 'Exe Mgr (100%)',
            license: 'DKH-4531',
          }

        ]
      },
      {
        key: 4,
        generation: '4',
        code: 1203,
        name: 'Corina Carmen',
        baseNo: 3,
        status: 'Active',
        perLevel: 'Reg Dir (80%)',
        license: 'DKH-2930',
        children: [
          {
            key: 5,
            generation: '5',
            code: 1204,
            name: 'Jordan Howard',
            baseNo: 9,
            status: 'Not Active',
            perLevel: 'Assoc (70%)',
            license: 'DKH-2940',
          },
        ],
      },

    ],
  },
  {
    key: 6,
    generation: '6',
    code: 1205,
    name: 'Alex Fay',
    baseNo: 12,
    status: 'Active',
    perLevel: 'Assoc (70%)',
    license: 'DKH-2043',
  },
];
const rowSelection = ref({
  checkStrictly: false,
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
});


export default {
  name: 'Agents-Table',
  components: {
    'a-space': Space,
    'a-table': Table,
    'a-switch': Switch,
    'a-button': Button
  },

  data() {
    return {
      checkStrictly: true,
      rowSelection,
      tableData,
      column,

    }
  },

  methods: {
    // Handle the Edit button click
    handleEdit(record) {
      // Implement your edit logic here
      console.log('Edit button clicked for record:', record);
    },
    // Handle the Delete button click
    handleDelete(record) {
      // Implement your delete logic here
      console.log('Delete button clicked for record:', record);
    },
  },


}
</script>


<template>
    <a-table :columns="column" :data-source="tableData" :row-selection="rowSelection">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'action'">
          <div class="operation-wrapper">


            <RouterLink to="/agent/agentView">

            <v-btn icon color="primary" variant="text">
              <EyeIcon size="20" />
            </v-btn>
            </RouterLink>

            <v-btn icon color="error" variant="text">
              <TrashIcon size="20" />
            </v-btn>
          </div>
        </template>
      </template>
    </a-table>

<!--  <a-table :columns="column" :data-source="tableData" :scroll="{ x: 1500, y: 300 }">-->

<!--  </a-table>-->


</template>