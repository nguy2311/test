<script setup lang="ts">
import { fetchTopics, getTopic } from "@/api/topic";
import HeaderComponent from "@/components/headerComponent/HeaderComponent.vue";
import HomeLinkComponent from "@/components/homelinkComponent/HomeLinkComponent.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
import { Topic } from "@/model/topic";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const type = ref("photo");

const handleSearch = (value: string) => {
  searchQuery.value = value;
};
const choosenTopic = ref<Topic | null>(null);

const handleChoose = async (value: string) => {
  type.value = value;
  if (value == "photo" || value == "illustration") {
    return;
  }

  if (isFetching.value) return;
  isFetching.value = true;

  try {
    const response = await getTopic(type.value);
    choosenTopic.value = response;
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isFetching.value = false;
  }
};

const isFetching = ref<boolean>(false);
const topics = ref<Array<Topic>>([]);

const fetchData = async () => {
  if (isFetching.value) return;
  isFetching.value = true;

  try {
    const response = await fetchTopics();
    topics.value = response;
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isFetching.value = false;
  }
};

onMounted(() => {
  fetchData();
});

const router = useRouter();
console.log(router.currentRoute.value.fullPath);
</script>

<template>
  <div class="sticky-container w-full">
    <HeaderComponent @search="handleSearch"></HeaderComponent>

    <HomeLinkComponent
      :topics
      @choose="handleChoose"
      @choose2=""
      @choose3=""
    ></HomeLinkComponent>

    <RouterView v-slot="{ Component, route }" class="flex w-full flex-col">
      <component
        :is="Component"
        :type="type"
        :topic="choosenTopic"
        :searchQuery="searchQuery"
      />
    </RouterView>
  </div>
  <Toaster />
</template>

<style>
.sticky-container {
  @apply flex flex-col w-full;
}

.header-container {
  @apply sticky top-0 z-10 bg-white;
}

.home-link-container {
  position: sticky;
  top: 62px;
  z-index: 9;
  background-color: white;
}
</style>
