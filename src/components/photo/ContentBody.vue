<template>
  <div
    class="flex max-w-[1336px] gap-[24px] px-[20px] box-border mx-auto items-start pt-[56px]"
    ref="scrollComponent"
  >
    <div
      v-for="(column, index) in columns"
      :key="index"
      class="w-1/3 flex flex-col gap-[24px]"
    >
      <ImageItem v-for="image in column" :key="image.id" :data="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchPhotos, fetchPhotosTopic, searchPhotos } from "@/api/photo";
import type { Image } from "@/model/image";
import { useSearchStore } from "@/store/searchStore";
import { useTypeStore } from "@/store/typeStore";
import { onMounted, onUnmounted, ref, watch } from "vue";
import ImageItem from "./ImageItem.vue";
const searchStore = useSearchStore();
const typeStore = useTypeStore();

const scrollComponent = ref(null);
const page = ref<number>(1);
const query = ref<string>(searchStore.searchQuery);
//Biến chứa chiều cao của từng cột
const height = ref<Array<number>>([0, 0, 0]);
//Biến chứa ảnh của từng cột
const columns = ref<Array<Image[]>>([[], [], []]);
const isFetching = ref(false);

//Tìm cột có chiều cao ít nhất
const getMinHeightColumn = () => {
  return height.value.indexOf(Math.min(...height.value));
};
//Cập nhật chiều cao của cột
const updateColumnHeight = (index: number, image: Image) => {
  const aspectRatio = image.height / image.width;
  const columnWidth = 416;
  const imageHeight = columnWidth * aspectRatio;
  height.value[index] += imageHeight;
};

const fetchPhoto = async () => {
  if (isFetching.value) return;
  isFetching.value = true;
  try {
    const response =
      query.value === ""
        ? await fetchPhotos({ page: page.value, size: 24 })
        : await searchPhotos({
            query: query.value,
            page: page.value,
            size: 24,
          }).then((res) => res.results);
    if (!Array.isArray(response)) {
      console.error("Unexpected response format:", response);
      return;
    }
    if (response.length == 0) {
      console.error("error no data");
      return;
    }
    response.forEach((image) => {
      const columnIndex = getMinHeightColumn();

      columns.value[columnIndex].push(image);

      updateColumnHeight(columnIndex, image);
    });
    page.value++;
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isFetching.value = false;
  }
};

const fetchDataTopic = async () => {
  if (isFetching.value) return;
  isFetching.value = true;
  try {
    const response =
      query.value === ""
        ? await fetchPhotosTopic({
            page: page.value,
            size: 24,
            topic: typeStore.type,
          })
        : await searchPhotos({
            query: query.value,
            page: page.value,
            size: 24,
          }).then((res) => res.results);
    if (!Array.isArray(response)) {
      console.error("Unexpected response format:", response);
      return;
    }
    if (response.length == 0) {
      console.error("error no data");
      return;
    }
    response.forEach((image) => {
      const columnIndex = getMinHeightColumn();

      columns.value[columnIndex].push(image);

      updateColumnHeight(columnIndex, image);
    });
    page.value++;
  } catch (error) {
    console.error(error);
  }
};

const fetchData = async () => {
  try {
    if (typeStore.type == "photo") {
      fetchPhoto();
    } else {
      fetchDataTopic();
    }
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isFetching.value = false;
  }
};

// Handle scroll event to load more data
let lastScroll = 0;

const handleScroll = () => {
  if (isFetching.value) return;
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.documentElement.scrollHeight - 1000;
  //Kiểm tra nếu cuộn đc 500px mới gọi fetachData
  if (scrollPosition >= threshold && scrollPosition - lastScroll > 500) {
    lastScroll = scrollPosition;
    fetchData();
  }
};

// Watch for changes in searchQuery
watch(
  () => searchStore.searchQuery,
  (newQuery) => {
    page.value = 1;
    query.value = newQuery;
    columns.value = [[], [], []];
    fetchData();
  }
);

watch(
  () => typeStore.type,
  () => {
    page.value = 1;
    columns.value = [[], [], []];
    fetchData();
  }
);

onMounted(() => {
  fetchData();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
