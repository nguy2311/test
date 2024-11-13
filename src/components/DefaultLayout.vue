<script setup lang="ts">
import { fetchTopics, getTopic } from "@/api/topic";
import HeaderComponent from "@/components/headerComponent/HeaderComponent.vue";
import HomeLinkComponent from "@/components/homelinkComponent/HomeLinkComponent.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
import { Topic } from "@/model/topic";
import { useSearchStore } from "@/store/searchStore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const searchStore = useSearchStore();

const type = ref("photo");

const chosenTopic = ref<Topic | null>(null);

const handleChoose = async (value: string) => {
  if (isFetching.value) return;
  type.value = value;
  if (type.value === "photo" || type.value === "illustration") {
    return;
  }

  isFetching.value = true;

  try {
    const response = await getTopic(type.value);
    chosenTopic.value = response;
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
    <HeaderComponent> </HeaderComponent>
    <HomeLinkComponent
      v-if="searchStore.searchQuery == ''"
      class="home-link-container flex w-full flex-col"
      :topics="topics"
      @choose="handleChoose"
    >
    </HomeLinkComponent>

    <RouterView v-slot="{ Component }">
      <component :is="Component" :type="type" :topic="chosenTopic" />
    </RouterView>
  </div>
  <Toaster />
</template>

<style>
.sticky-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header-container {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
}

.home-link-container {
  position: sticky;
  top: 62px;
  z-index: 9;
  background-color: white;
}
</style>
