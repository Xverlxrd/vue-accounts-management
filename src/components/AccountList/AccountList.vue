<template>
  <section class="account-list">

    <header class="account-list__header">
      <AccountLabelColumn
          v-for="column in ACCOUNT_LABELS"
          :key="column.key"
          :column-key="column.key"
          :title="column.title"
          :tooltip="column.tooltip"
      />
    </header>

    <ul class="account-list__items">
      <li v-for="account in accounts" :key="account.id" class="account-list__item">
        <div class="account-list__field account-list__field--label">
          <a-input
              v-model:value="account.label"
              placeholder="Введите метку"
              class="account-list__input"
          />
        </div>

        <div class="account-list__field account-list__field--type">
          <a-select
              v-model:value="account.type"
              class="account-list__select"
              placeholder="Выберите тип"
          >
            <a-select-option value="local">Локальная</a-select-option>
            <a-select-option value="ldap">LDAP</a-select-option>
          </a-select>
        </div>

        <div class="account-list__field account-list__field--login">
          <a-input
              v-model:value="account.login"
              placeholder="Введите логин"
              class="account-list__input"
          />
        </div>

        <div class="account-list__field account-list__field--password">
          <a-input-password
              v-model:value="account.password"
              placeholder="Введите пароль"
              class="account-list__input"
          />
        </div>

        <div class="account-list__field account-list__field--actions">
          <a-button
              @click="$emit('deleteForm', account.id)"
              type="primary"
              danger
              class="account-list__button">
            Удалить
          </a-button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import AccountLabelColumn from "../AccountLabelColumn/AccountLabelColumn.vue";
import {ACCOUNT_LABELS} from "../../constants/accountLabels.const.ts";
import type {Account} from "../../types/accounts.type.ts";

defineProps<{
  accounts: Account[]
}>()

defineEmits(['deleteForm'])
</script>

<style scoped lang="scss">
.account-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
  overflow: hidden;

  &__header {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr 1.5fr 120px;
    gap: 12px;
    padding: 16px;
    background-color: #fafafa;
    border-bottom: 1px solid #f0f0f0;
  }

  &__column {
    &-title {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      cursor: default;
    }
  }

  &__items {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr 1.5fr 120px;
    gap: 12px;
    padding: 16px;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.3s;

    &:hover {
      background-color: #fafafa;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &__input,
  &__select {
    width: 100%;
  }

  &__button {
    width: 100%;
  }

  @media (max-width: 768px) {
    &__header,
    &__item {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    &__column-title {
      display: none;
    }
  }
}
</style>