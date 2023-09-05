<script>
import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields(
      ['fieldName', 'fieldJob', 'fieldPhone'],
    ),
  },
};
</script>

<template>
    <div>
        <h3>vuex-map-fields 測試接收結果</h3>
        <p>FieldName: {{ fieldName }}</p>
        <p>FieldJob: {{ fieldJob }}</p>
        <p>FieldPhone: {{ fieldPhone }}</p>
    </div>
</template>
