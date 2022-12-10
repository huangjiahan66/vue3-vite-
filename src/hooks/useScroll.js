import { ref, onUnmounted, onMounted } from "vue";
export default function useScroll() {
  const isReachBottom = ref(false);
  const srollTop = ref(0);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);

  const scrollListenerHandler = () => {
    srollTop.value = document.documentElement.scrollTop; //滚动距离
    clientHeight.value = document.documentElement.clientHeight; //内容高度
    scrollHeight.value = document.documentElement.scrollHeight; //元素内容的高度

    if (clientHeight.value + srollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了");
      isReachBottom.value = true;
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return {
    srollTop,
    clientHeight,
    scrollHeight,
    isReachBottom,
  };
}
