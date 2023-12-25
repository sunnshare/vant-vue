import LoadingComponet from "@/components/loading.vue";
const loadable = (asyncFun) => {
  let component = () => ({
    component: asyncFun(),
    loading: LoadingComponet,
  });

  return {
    render(h) {
      return h(component);
    },
  };
};

export default loadable;
