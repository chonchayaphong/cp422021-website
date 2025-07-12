<script setup>
import { ref } from "vue";
import InfoCard from "@/components/cards/InfoCard.vue";
import TableInfoCard from "@/components/cards/TableInfoCard.vue";
import { useTableStore } from "@/store/table";

const tableStore = useTableStore();
const openedTables = ref([]); // ใช้เก็บโต๊ะที่กำลังแสดงการ์ด

const reserveTable = (table) => {
  table.status = 'reserve';
  table.checkin = new Date();

  // ถ้ายังไม่อยู่ใน openedTables ให้เพิ่ม
  if (!openedTables.value.includes(table.name)) {
    openedTables.value.push(table.name);
  }
};

const closeTable = (table) => {
  // ลบออกจาก openedTables
  openedTables.value = openedTables.value.filter(name => name !== table.name);
  table.status = 'ready'; // เปลี่ยนสถานะกลับ (ถ้าต้องการ)
};
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>โต๊ะในร้าน</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow>
        <VCol cols="3">
          <InfoCard title="โต๊ะทั้งหมด" :stats="10" unit="ตัว" icon="mdi-table" color="primary" />
        </VCol>
        <VCol cols="3">
          <InfoCard title="โต๊ะว่าง" :stats="5" unit="ตัว" icon="mdi-table-plus" color="success" />
        </VCol>
        <VCol cols="3">
          <InfoCard title="ใช้งานอยู่" :stats="5" unit="ตัว" icon="mdi-table-account" color="warning" />
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn class="fill-height" variant="text" block>
              <VIcon>mdi-plus</VIcon>
              เพิ่มโต๊ะใหม่
            </VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard class="mt-8">
    <VCardText>
      <v-container class="text-center">
        <v-row justify="center">
          <v-col
            v-for="table in tableStore.tables"
            :key="table.name"
            cols="12" md="5" sm="6"
          >
            <!-- ถ้าโต๊ะนี้อยู่ใน openedTables แสดงการ์ด -->
            <TableInfoCard
              v-if="openedTables.includes(table.name)"
              :table="table"
              @close="closeTable(table)"
            />

            <!-- ถ้าไม่อยู่ แสดงปุ่ม -->
            <v-btn
              v-else
              @click="reserveTable(table)"
              rounded="x-large"
              size="x-large"
              block
            >
              <v-icon>mdi-table</v-icon>
              โต๊ะ {{ table.name }} - {{ table.status }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </VCardText>
  </VCard>
</template>
