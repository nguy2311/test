<template>
  <div
    class="flex max-w-[1336px] gap-[24px] px-[20px] box-border mx-auto items-start"
    ref="scrollComponent"
  >
    <div
      v-for="(column, index) in columnImages"
      :key="index"
      class="w-1/3 flex flex-col gap-[24px]"
    >
      <ImageItem v-for="image in column" :key="image.id" :data="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, onUnmounted, watch } from "vue";
import ImageItem from "./ImageItem.vue";
import { fetchPhotos, fetchPhotosTopic, searchPhotos } from "@/api/photo";
import type { Image } from "@/model/image";

const props = defineProps<{
  searchQuery: string;
  type: string;
  topic?: string;
}>();

const scrollComponent = ref(null);
const page = ref<number>(1);
const query = ref<string>("");
// chiều cao theo từng cột
const columnHeight = ref<Array<number>>([0, 0, 0]);
// ảnh trong các cột
const columnImages = ref<Array<Image[]>>([[], [], []]);
const isFetching = ref(false);

const getMinHeightColumn = () => {
  return columnHeight.value.indexOf(Math.min(...columnHeight.value));
};

const updateColumnHeight = (index: number, image: Image) => {
  const aspectRatio = image.height / image.width;
  const columnWidth = 416;
  const imageHeight = columnWidth * aspectRatio;
  columnHeight.value[index] += imageHeight;
};

const fetchData = async () => {
  if (isFetching.value) return;
  isFetching.value = true;

  try {
    if (props.type == "photo") {
      const response =
        query.value === ""
          ? await fetchPhotos({ page: page.value, size: 24 })
          : await searchPhotos({
              query: query.value,
              page: page.value,
              size: 24,
            }).then((res) => res.results);

      response.forEach((image) => {
        const columnIndex = getMinHeightColumn();

        columnImages.value[columnIndex].push(image);

        updateColumnHeight(columnIndex, image);
      });
    } else {
      const response =
        query.value === ""
          ? await fetchPhotosTopic({
              page: page.value,
              size: 24,
              topic: props.topic,
            })
          : await searchPhotos({
              query: query.value,
              page: page.value,
              size: 24,
            }).then((res) => res.results);

      response.forEach((image) => {
        const columnIndex = getMinHeightColumn();

        columnImages.value[columnIndex].push(image);

        updateColumnHeight(columnIndex, image);
      });
    }

    page.value++;
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isFetching.value = false;
  }
};

// Handle scroll event to load more data
const handleScroll = () => {
  if (isFetching.value) return;
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.documentElement.scrollHeight - 500;
  if (scrollPosition >= threshold) {
    fetchData();
  }
};

// Watch for changes in searchQuery
watch(
  () => props.searchQuery,
  (newQuery) => {
    page.value = 1;
    query.value = newQuery;
    columnImages.value = [[], [], []];
    fetchData();
  }
);

watch(
  () => props.topic,
  () => {
    page.value = 1;
    columnImages.value = [[], [], []];
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
