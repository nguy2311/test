<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
import HeaderComponent from "@/components/headerComponent/HeaderComponent.vue";
import { useRouter } from "vue-router";
import HomeLinkComponent from "@/components/homelinkComponent/HomeLinkComponent.vue";
import { onMounted, ref,watch } from 'vue';
import { Topic } from "@/model/topic";
import { fetchTopics, getTopic } from "@/api/topic";


const searchQuery = ref(''); 
const type = ref('photo')

const handleSearch = (value: string) => {
  searchQuery.value = value; 
};
const choosenTopic = ref<Topic | null>(null)


const handleChoose = async (value: string) => {
  type.value = value;
  if (type.value != "photo" && type.value != "illustration"){
     if (isFetching.value) return;
      isFetching.value = true;

      try {
        const response =   await getTopic(type.value)
        choosenTopic.value = response
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        isFetching.value = false;
      }
  }
}

const isFetching = ref<boolean>(false)
const topics =ref<Array<Topic>>([])

const fetchData = async () => {
  if (isFetching.value) return;
  isFetching.value = true;

  try {
    const response =   await fetchTopics()
    topics.value = response
  } catch (error) {
    console.error('Error fetching photos:', error);
  } finally {
    isFetching.value = false;
  }
};

onMounted(() => {
  fetchData();
})


const router = useRouter();
console.log(router.currentRoute.value.fullPath);
</script>

<template>
  <div class=" w-full ">
    <header class="flex w-full flex-col overflow-hidden">
      <HeaderComponent @search="handleSearch"></HeaderComponent>
    </header>
    <div class="flex w-full flex-col">
      <HomeLinkComponent :topics @choose="handleChoose"></HomeLinkComponent>
    </div>

    <div class="flex w-full flex-col">
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :type="type" :topic="choosenTopic" :searchQuery="searchQuery" />
      </RouterView>
    </div>


    
    
  </div>
  <Toaster />
</template>
