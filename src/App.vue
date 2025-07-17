<template>
  <main class="accounts">
    <header class="accounts__header">
      <h1 class="accounts__title">Учетные записи</h1>
      <a-button
          @click="accountStore.addAccount"
          class="accounts__add-btn"
          type="primary"
      >
        <PlusOutlined />
      </a-button>
    </header>

    <section class="accounts__content">
      <div class="accounts__list">
        <AccountList
            @deleteForm="accountStore.removeAccount"
            v-if="accountStore.accounts.length"
            :accounts="accountStore.accounts"
        />
        <p v-else class="accounts__empty-message">Список учетных записей пуст</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {PlusOutlined} from '@ant-design/icons-vue'
import AccountList from "./components/AccountList/AccountList.vue";
import {useAccountsStore} from "./stores/accountStore.ts";

const accountStore = useAccountsStore();
</script>

<style scoped lang="scss">
.accounts {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  &__title {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
  }

  &__add-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  &__content {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }

  &__list {
    padding: 24px;
  }

  &__empty-message {
    margin: 0;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    padding: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 16px;

    &__header {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    &__add-btn {
      width: fit-content;
    }
  }
}
</style>